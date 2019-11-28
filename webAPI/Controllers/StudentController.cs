using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webAPI.Models;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public StudentController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public ICollection<Student> Get()
        {
            return context.Student.ToList();
        }
        [HttpGet("{id}",Name="newStudent")]
        public IActionResult Get(int id)
        {
            var stud = context.Student.FirstOrDefault(x => x.Id == id);

            if (stud != null) {

                return Ok(stud); 

            }

            return NotFound();

        }

        [HttpPost]
        public IActionResult Post([FromBody] Student student)
        {
            if (ModelState.IsValid)
            {
                context.Student.Add(student);
                context.SaveChanges();
                return Ok(student);
            }
            return BadRequest();
        }
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Student estudiante, int id)
        {
            
            if(estudiante.Id == id)
            {

                context.Entry(estudiante).State = EntityState.Modified;
                context.SaveChanges();
                return Ok(estudiante); 

            }

            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var stud = context.Student.FirstOrDefault(x => x.Id == id);
            if(stud != null)
            {
                context.Student.Remove(stud);
                context.SaveChanges();
                return Ok("Se eliminó a: " + stud.FirstName + " " + stud.FirstLastName); 
            }
            return NotFound();
        }
    }
}