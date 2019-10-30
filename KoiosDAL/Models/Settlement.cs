using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KoiosDAL.Models
{
    public class Settlement
    {
        [Key]
        public int SettlementId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string ZipCode { get; set; }


        public int CountryId { get; set; }
        public Country Country { get; set; }
    }
}