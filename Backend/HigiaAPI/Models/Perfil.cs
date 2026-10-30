namespace HigiaAPI.Models
{
    public class Perfil
    {
        public int IdPerfil { get; set; }
        public string Nome { get; set; } = "";
        public DateTime? DataNascimento { get; set; }
        public string? Fotografia { get; set; }
        public string? Alergias { get; set; }
        public string? ProblemasSaude { get; set; }
        public string? Observacoes { get; set; }
        public int IdUtilizador { get; set; }
    }
}