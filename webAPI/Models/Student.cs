using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set;  }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string SecondName { get; set; }
        [Required]
        public string FirstLastName { get; set; }
        [Required]
        public string SecondLastName { get; set; }
        [Required]
        public string BirthDate { get; set; }
        [Required]
        public string BirthPlace { get; set; }
        [Required]
        public string Genre { get; set; }
        [Required]
        public string CivilStatus { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Cedula { get; set; }
        [Required]
        public string Country { get; set;  }
        [Required]
        public string CellphoneNumber { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
