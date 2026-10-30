
using HigiaAPI.Data;
using HigiaAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HigiaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UtilizadoresController : ControllerBase
    {
        private readonly HigiaContext _contexto;

        private readonly PasswordHasher<Utilizador> _codificadorPalavraPasse;

        public UtilizadoresController(HigiaContext contexto)
        {
            _contexto = contexto;
            _codificadorPalavraPasse = new PasswordHasher<Utilizador>();
        }

        private static object DadosPublicos(Utilizador utilizador)
        {
            return new
            {
                utilizador.IdUtilizador,
                utilizador.Nome,
                utilizador.Email,
                utilizador.Fotografia
            };
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetUtilizadores()
        {
            var utilizadores = await _contexto.Utilizadores.ToListAsync();
            return Ok(utilizadores.Select(utilizadorLista => DadosPublicos(utilizadorLista)));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUtilizador(int id)
        {
            var utilizador = await _contexto.Utilizadores.FindAsync(id);
            if (utilizador == null)
            {
                return NotFound(new
                {
                    mensagem = "Utilizador não encontrado."
                });
            }
            return Ok(DadosPublicos(utilizador));
        }

        [HttpPost]
        public async Task<IActionResult> CriarUtilizador(Utilizador utilizador)
        {
            var email = utilizador.Email.Trim();
            var utilizadorExistente = await _contexto.Utilizadores.FirstOrDefaultAsync(utilizadorLista => utilizadorLista.Email == email);
            if (utilizadorExistente != null)
            {
                return BadRequest(new
                {
                    mensagem = "Já existe uma conta com este email."
                });
            }

            if (string.IsNullOrWhiteSpace(utilizador.PalavraPasse))
            {
                return BadRequest(new
                {
                    mensagem = "A palavra-passe é obrigatória."
                });
            }

            utilizador.Nome = utilizador.Nome.Trim();
            utilizador.Email = email;
            utilizador.PalavraPasse = _codificadorPalavraPasse.HashPassword(utilizador, utilizador.PalavraPasse);
            _contexto.Utilizadores.Add(utilizador);
            await _contexto.SaveChangesAsync();
            return Ok(DadosPublicos(utilizador));
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(Utilizador dados)
        {
            var email = dados.Email.Trim();
            var utilizador = await _contexto.Utilizadores.FirstOrDefaultAsync(utilizadorLista => utilizadorLista.Email == email);
            if (utilizador == null ||
                string.IsNullOrEmpty(dados.PalavraPasse))
            {
                return Unauthorized(new
                {
                    mensagem = "Email ou palavra-passe incorretos."
                });
            }

            var palavraPasseGuardada = utilizador.PalavraPasse;
            var palavraPassePareceHash = palavraPasseGuardada.StartsWith("AQAAAA");
            if (palavraPassePareceHash)
            {
                var resultado = _codificadorPalavraPasse.VerifyHashedPassword(utilizador, palavraPasseGuardada, dados.PalavraPasse);
                if (resultado == PasswordVerificationResult.Failed)
                {
                    return Unauthorized(new
                    {
                        mensagem = "Email ou palavra-passe incorretos."
                    });
                }

                if (resultado == PasswordVerificationResult.SuccessRehashNeeded)
                {
                    utilizador.PalavraPasse = _codificadorPalavraPasse.HashPassword(utilizador, dados.PalavraPasse);
                    await _contexto.SaveChangesAsync();
                }
            }
            else
            {
                if (palavraPasseGuardada != dados.PalavraPasse)
                {
                    return Unauthorized(new
                    {
                        mensagem = "Email ou palavra-passe incorretos."
                    });
                }
                utilizador.PalavraPasse = _codificadorPalavraPasse.HashPassword(utilizador, dados.PalavraPasse);
                await _contexto.SaveChangesAsync();
            }
            return Ok(DadosPublicos(utilizador));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditarUtilizador(int id, Utilizador dados)
        {
            if (id != dados.IdUtilizador)
            {
                return BadRequest(new
                {
                    mensagem = "O ID do utilizador não corresponde."
                });
            }

            var utilizador = await _contexto.Utilizadores.FindAsync(id);
            if (utilizador == null)
            {
                return NotFound(new
                {
                    mensagem = "Utilizador não encontrado."
                });
            }

            var email = dados.Email.Trim();
            var emailEmUso = await _contexto.Utilizadores.AnyAsync(utilizadorLista => utilizadorLista.Email == email && utilizadorLista.IdUtilizador != id);
            if (emailEmUso)
            {
                return BadRequest(new
                {
                    mensagem = "Já existe uma conta com este email."
                });
            }

            utilizador.Nome = dados.Nome.Trim();
            utilizador.Email = email;
            utilizador.Fotografia = dados.Fotografia;
            if (!string.IsNullOrWhiteSpace(dados.PalavraPasse))
            {
                utilizador.PalavraPasse = _codificadorPalavraPasse.HashPassword(utilizador, dados.PalavraPasse);
            }
            await _contexto.SaveChangesAsync();
            return Ok(DadosPublicos(utilizador));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ApagarUtilizador(int id)
        {
            var utilizador = await _contexto.Utilizadores.FindAsync(id);
            if (utilizador == null)
            {
                return NotFound(new
                {
                    mensagem = "Utilizador não encontrado."
                });
            }
            _contexto.Utilizadores.Remove(utilizador);
            await _contexto.SaveChangesAsync();
            return Ok(new
            {
                mensagem = "Utilizador eliminado com sucesso."
            });
        }
    }
}