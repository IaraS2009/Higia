namespace HigiaAPI.Models
{
    public class Utilizador
    {
        public int IdUtilizador { get; set; }
        public string Nome { get; set; } = "";
        public string Email { get; set; } = "";
        public string PalavraPasse { get; set; } = "";
        public string? Fotografia { get; set; }
    }
}