using HigiaAPI.Data;
using HigiaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HigiaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PerfisController : ControllerBase
    {
        private readonly HigiaContext _contexto;

        public PerfisController(HigiaContext contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Perfil>>> GetPerfis()
        {
            return await _contexto.Perfis.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Perfil>> GetPerfil(int id)
        {
            var perfil = await _contexto.Perfis.FindAsync(id);
            if (perfil == null)
            {
                return NotFound(new
                {
                    mensagem = "Perfil não encontrado."
                });
            }
            return Ok(perfil);
        }

        [HttpGet("utilizador/{idUtilizador}")]
        public async Task<ActionResult<IEnumerable<Perfil>>> GetPerfisUtilizador(int idUtilizador)
        {
            var perfis = await _contexto.Perfis.Where(perfilLista => perfilLista.IdUtilizador == idUtilizador).ToListAsync();
            return Ok(perfis);
        }

        [HttpPost]
        public async Task<ActionResult<Perfil>> CriarPerfil(Perfil perfil)
        {
            var utilizador = await _contexto.Utilizadores.FindAsync(perfil.IdUtilizador);
            if (utilizador == null)
            {
                return BadRequest(new
                {
                    mensagem = "O utilizador não existe."
                });
            }
            _contexto.Perfis.Add(perfil);
            await _contexto.SaveChangesAsync();
            return Ok(perfil);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditarPerfil(int id, Perfil perfil)
        {
            if (id != perfil.IdPerfil)
            {
                return BadRequest(new
                {
                    mensagem = "O ID do perfil não corresponde."
                });
            }

            var perfilExistente = await _contexto.Perfis.FindAsync(id);
            if (perfilExistente == null)
            {
                return NotFound(new
                {
                    mensagem = "Perfil não encontrado."
                });
            }

            perfilExistente.Nome = perfil.Nome;
            perfilExistente.DataNascimento = perfil.DataNascimento;
            perfilExistente.Fotografia = perfil.Fotografia;
            perfilExistente.Alergias = perfil.Alergias;
            perfilExistente.ProblemasSaude = perfil.ProblemasSaude;
            perfilExistente.Observacoes = perfil.Observacoes;
            await _contexto.SaveChangesAsync();
            return Ok(perfilExistente);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ApagarPerfil(int id)
        {
            var perfil = await _contexto.Perfis.FindAsync(id);
            if (perfil == null)
            {
                return NotFound(new
                {
                    mensagem = "Perfil não encontrado."
                });
            }
            _contexto.Perfis.Remove(perfil);
            await _contexto.SaveChangesAsync();
            return Ok(new
            {
                mensagem = "Perfil eliminado com sucesso."
            });
        }
    }
}