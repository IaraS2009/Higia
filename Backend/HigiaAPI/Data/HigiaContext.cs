using HigiaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HigiaAPI.Data
{
    public class HigiaContext : DbContext
    {
        public HigiaContext(DbContextOptions<HigiaContext> opcoes): base(opcoes)
        {
        }
        public DbSet<Utilizador> Utilizadores { get; set; }
        public DbSet<Perfil> Perfis { get; set; }
        public DbSet<Medicamento> Medicamentos { get; set; }
        public DbSet<Toma> Tomas { get; set; }

        protected override void OnModelCreating(ModelBuilder construtorModelo)
        {
            construtorModelo.Entity<Utilizador>().ToTable("Utilizador");
            construtorModelo.Entity<Perfil>().ToTable("Perfil");
            construtorModelo.Entity<Medicamento>().ToTable("Medicamento");
            construtorModelo.Entity<Toma>().ToTable("Toma");
            construtorModelo.Entity<Utilizador>().HasKey(utilizador => utilizador.IdUtilizador);
            construtorModelo.Entity<Perfil>().HasKey(perfil => perfil.IdPerfil);
            construtorModelo.Entity<Medicamento>().HasKey(medicamento => medicamento.IdMedicamento);
            construtorModelo.Entity<Toma>().HasKey(toma => toma.IdToma);
        }
    }
}