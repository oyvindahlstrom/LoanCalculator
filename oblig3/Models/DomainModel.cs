using System.ComponentModel.DataAnnotations;

namespace oblig3.Models
{
    public class DomainModel
    {
        [Required]
        [RegularExpression("^[0-9]{11}$")]
        public string socialSecurity { get; set; }

        [Required]
        [RegularExpression("^[0-9]{8}$")]
        public string phone { get; set; }

        [Required]
        [RegularExpression("^([a-zA-Z0-9_.+-])+\\@(([a-zA-Z0-9-])+\\.)+([a-zA-Z0-9]{2,4})$")]
        public string email { get; set; }
        

        [Required]
        [RegularExpression("^[0-9]{2,6}$")]
        public int amount { get; set; }

        public int interest = 7;

        [Required]
        [RegularExpression("^[0-9]{1,2}$")]
        public int years { get; set; }

        [Required]
        [RegularExpression("^[0-9]{1,6}$")]
        public double monthly { get; set; }
    }
}