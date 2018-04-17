
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using SPAtraductores.Models;

namespace SPAtraductores.Controllers
{
    public class TraductorController : Controller
    {
        TraductorDataAccess objtraduct = new TraductorDataAccess();
        [HttpGet]
        [Route("api/Traductor/Index")]
        public IEnumerable<Traductor> Index()
        {
            return objtraduct.GetAllTraductores();
        }
        [HttpPost]
        [Route("api/Traductor/Create")]
        public int Create([FromBody] Traductor traductor)
        {
            return objtraduct.AddTraductor(traductor);
        }
        [HttpGet]
        [Route("api/Traductor/Details/{id}")]
        public Traductor Details(int id)
        {
            return objtraduct.GetTraductorData(id);
        }
        [HttpPut]
        [Route("api/Traductor/Edit")]
        public int Edit([FromBody]Traductor traductor)
        {
            return objtraduct.UpdateTraductor(traductor);
        }
        [HttpDelete]
        [Route("api/Traductor/Delete/{id}")]
        public int Delete(int id)
        {
            return objtraduct.DeleteTraductor(id);
        }
    }
}