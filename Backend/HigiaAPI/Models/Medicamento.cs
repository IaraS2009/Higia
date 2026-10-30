namespace HigiaAPI.Models
{
    public class Medicamento
    {
        public int IdMedicamento { get; set; }
        public string Nome { get; set; } = "";
        public string? Tipo { get; set; }
        public string? Dosagem { get; set; }
        public int QuantidadeDisponivel { get; set; }
        public string? Frequencia { get; set; }
        public string? Fotografia { get; set; }
        public string? Observacoes { get; set; }
        public int IdPerfil { get; set; }
    }
}