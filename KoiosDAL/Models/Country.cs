using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace KoiosDAL.Models
{
    public class Country
    {
        [Key]
        public int CountryId { get; set; }
        [Required]
        public string Name { get; set; }

        [IgnoreDataMember]
        public List<Settlement> Settlements { get; set; }
    }
}