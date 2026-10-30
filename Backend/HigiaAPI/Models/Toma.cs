namespace HigiaAPI.Models
{
    public class Toma
    {
        public int IdToma { get; set; }
        public DateTime DataHora { get; set; }
        public string Estado { get; set; } = "Pendente";
        public int QuantidadeTomada { get; set; }
        public int IdMedicamento { get; set; }
    }
}