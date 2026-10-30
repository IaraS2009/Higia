using HigiaAPI.Data;
using HigiaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HigiaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TomasController : ControllerBase
    {
        private readonly HigiaContext _contexto;

        public TomasController(HigiaContext contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Toma>>> GetTomas()
        {
            return await _contexto.Tomas.OrderBy(tomaLista => tomaLista.DataHora).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Toma>> GetToma(int id)
        {
            var toma = await _contexto.Tomas.FindAsync(id);
            if (toma == null)
            {
                return NotFound(new
                {
                    mensagem = "Toma não encontrada."
                });
            }
            return Ok(toma);
        }

        [HttpGet("medicamento/{idMedicamento}")]
        public async Task<ActionResult<IEnumerable<Toma>>> GetTomasMedicamento(int idMedicamento)
        {
            var tomas = await _contexto.Tomas.Where(tomaLista => tomaLista.IdMedicamento == idMedicamento).OrderBy(tomaLista => tomaLista.DataHora).ToListAsync();
            return Ok(tomas);
        }

        [HttpGet("pendentes")]
        public async Task<ActionResult<IEnumerable<Toma>>> GetTomasPendentes()
        {
            var agora = DateTime.Now;
            var tomas = await _contexto.Tomas.Where(toma => toma.Estado != "Tomada").ToListAsync();
            foreach (var toma in tomas)
            {
                if (agora > toma.DataHora.AddMinutes(30))
                {
                    toma.Estado = "Atrasada";
                }
                else
                {
                    toma.Estado = "Pendente";
                }
            }
            await _contexto.SaveChangesAsync();
            return Ok(tomas);
        }

        [HttpPost]
        public async Task<ActionResult<Toma>> CriarToma(Toma toma)
        {
            var medicamento = await _contexto.Medicamentos.FindAsync(toma.IdMedicamento);
            if (medicamento == null)
            {
                return BadRequest(new
                {
                    mensagem = "O medicamento não existe."
                });
            }

            if (toma.QuantidadeTomada <= 0)
            {
                return BadRequest(new
                {
                    mensagem = "A quantidade da toma deve ser superior a zero."
                });
            }

            if (toma.QuantidadeTomada > medicamento.QuantidadeDisponivel)
            {
                return BadRequest(new
                {
                    mensagem = "A quantidade da toma é superior ao stock disponível."
                });
            }

            toma.Estado = "Pendente";
            _contexto.Tomas.Add(toma);
            await _contexto.SaveChangesAsync();
            return Ok(toma);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditarToma(int id, Toma toma)
        {
            if (id != toma.IdToma)
            {
                return BadRequest(new
                {
                    mensagem = "O ID da toma não corresponde."
                });
            }

            var tomaExistente = await _contexto.Tomas.FindAsync(id);
            if (tomaExistente == null)
            {
                return NotFound(new
                {
                    mensagem = "Toma não encontrada."
                });
            }

            if (toma.QuantidadeTomada <= 0)
            {
                return BadRequest(new
                {
                    mensagem = "A quantidade da toma deve ser superior a zero."
                });
            }

            tomaExistente.DataHora = toma.DataHora;
            tomaExistente.QuantidadeTomada = toma.QuantidadeTomada;

            if (tomaExistente.Estado != "Tomada")
            {
                if (DateTime.Now > tomaExistente.DataHora.AddMinutes(30))
                {
                    tomaExistente.Estado = "Atrasada";
                }
                else
                {
                    tomaExistente.Estado = "Pendente";
                }
            }
            
            await _contexto.SaveChangesAsync();
            return Ok(tomaExistente);
        }

        [HttpPut("{id}/registar")]
        public async Task<IActionResult> RegistarToma(int id)
        {
            var toma = await _contexto.Tomas.FindAsync(id);
            if (toma == null)
            {
                return NotFound(new
                {
                    mensagem = "Toma não encontrada."
                });
            }

            if (toma.Estado == "Tomada")
            {
                return BadRequest(new
                {
                    mensagem = "Esta toma já foi registada."
                });
            }

            var medicamento = await _contexto.Medicamentos.FindAsync(toma.IdMedicamento);
            if (medicamento == null)
            {
                return BadRequest(new
                {
                    mensagem = "O medicamento associado não existe."
                });
            }

            if (toma.QuantidadeTomada <= 0)
            {
                return BadRequest(new
                {
                    mensagem = "A quantidade da toma deve ser superior a zero."
                });
            }

            if (toma.QuantidadeTomada > medicamento.QuantidadeDisponivel)
            {
                return BadRequest(new
                {
                    mensagem = "Não existe stock suficiente para registar esta toma."
                });
            }

            medicamento.QuantidadeDisponivel -= toma.QuantidadeTomada;
            if (medicamento.QuantidadeDisponivel < 0)
            {
                medicamento.QuantidadeDisponivel = 0;
            }

            toma.Estado = "Tomada";
            await _contexto.SaveChangesAsync();
            return Ok(new
            {
                mensagem = "Toma registada com sucesso.",
                toma = toma,
                stockAtual = medicamento.QuantidadeDisponivel
            });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ApagarToma(int id)
        {
            var toma = await _contexto.Tomas.FindAsync(id);
            if (toma == null)
            {
                return NotFound(new
                {
                    mensagem = "Toma não encontrada."
                });
            }
            _contexto.Tomas.Remove(toma);
            await _contexto.SaveChangesAsync();
            return Ok(new
            {
                mensagem = "Toma eliminada com sucesso."
            });
        }
    }
}