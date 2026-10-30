using HigiaAPI.Data;
using HigiaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HigiaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicamentosController : ControllerBase
    {
        private readonly HigiaContext _contexto;

        public MedicamentosController(HigiaContext contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Medicamento>>> GetMedicamentos()
        {
            return await _contexto.Medicamentos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Medicamento>> GetMedicamento(int id)
        {
            var medicamento = await _contexto.Medicamentos.FindAsync(id);
            if (medicamento == null)
            {
                return NotFound(new
                {
                    mensagem = "Medicamento não encontrado."
                });
            }
            return Ok(medicamento);
        }

        [HttpGet("perfil/{idPerfil}")]
        public async Task<ActionResult<IEnumerable<Medicamento>>> GetMedicamentosPerfil(int idPerfil)
        {
            var medicamentos = await _contexto.Medicamentos.Where(medicamentoLista => medicamentoLista.IdPerfil == idPerfil).ToListAsync();
            return Ok(medicamentos);
        }

        [HttpPost]
        public async Task<ActionResult<Medicamento>> CriarMedicamento(Medicamento medicamento)
        {
            var perfil = await _contexto.Perfis.FindAsync(medicamento.IdPerfil);
            if (perfil == null)
            {
                return BadRequest(new
                {
                    mensagem = "O perfil não existe."
                });
            }

            if (medicamento.QuantidadeDisponivel < 0)
            {
                return BadRequest(new
                {
                    mensagem = "A quantidade disponível não pode ser negativa."
                });
            }

            _contexto.Medicamentos.Add(medicamento);
            await _contexto.SaveChangesAsync();
            return Ok(medicamento);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditarMedicamento(int id, Medicamento medicamento)
        {
            if (id != medicamento.IdMedicamento)
            {
                return BadRequest(new
                {
                    mensagem = "O ID do medicamento não corresponde."
                });
            }

            var medicamentoExistente = await _contexto.Medicamentos.FindAsync(id);
            if (medicamentoExistente == null)
            {
                return NotFound(new
                {
                    mensagem = "Medicamento não encontrado."
                });
            }

            if (medicamento.QuantidadeDisponivel < 0)
            {
                return BadRequest(new
                {
                    mensagem = "A quantidade disponível não pode ser negativa."
                });
            }

            medicamentoExistente.Nome = medicamento.Nome;
            medicamentoExistente.Tipo = medicamento.Tipo;
            medicamentoExistente.Dosagem = medicamento.Dosagem;
            medicamentoExistente.QuantidadeDisponivel = medicamento.QuantidadeDisponivel;
            medicamentoExistente.Frequencia = medicamento.Frequencia;
            medicamentoExistente.Fotografia = medicamento.Fotografia;
            medicamentoExistente.Observacoes = medicamento.Observacoes;

            await _contexto.SaveChangesAsync();
            return Ok(medicamentoExistente);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ApagarMedicamento(int id)
        {
            var medicamento = await _contexto.Medicamentos.FindAsync(id);
            if (medicamento == null)
            {
                return NotFound(new
                {
                    mensagem = "Medicamento não encontrado."
                });
            }
            _contexto.Medicamentos.Remove(medicamento);
            await _contexto.SaveChangesAsync();
            return Ok(new
            {
                mensagem = "Medicamento eliminado com sucesso."
            });
        }
    }
}