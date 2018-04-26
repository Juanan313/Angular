
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

        // GET ALL DATA functions

        [HttpGet]
        [Route("api/Traductor/Index")]
        public IEnumerable<Traductor> Index()
        {
            return objtraduct.GetAllTraductores();
        }


        [HttpGet]
        [Route("api/Idioma/Index")]
        public IEnumerable<Idioma> IndexLanguage()
        {
            return objtraduct.GetAllLenguages();
        }

        [HttpGet]
        [Route("api/Servicio/Index")]
        public IEnumerable<Servicio> IndexServices()
        {
            return objtraduct.GetAllServices();
        }


        // HttpPost DATA Create

        [HttpPost]
        [Route("api/Traductor/Create")]
        public int Create([FromBody] Traductor traductor)
        {
            return objtraduct.AddTraductor(traductor);
        }

        [HttpPost]
        [Route("api/Idioma/Create")]
        public String CreateLengage([FromBody] Idioma idioma)
        {
            return objtraduct.AddLanguage(idioma);
        }

        [HttpPost]
        [Route("api/Servicio/Create")]
        public string CreateService([FromBody] Servicio servicio)
        {
            return objtraduct.AddService(servicio);
        }

        // Get the data of a traductor by id

        [HttpGet]
        [Route("api/Traductor/Details/{id}")]
        public Traductor Details(int id)
        {
            return objtraduct.GetTraductorData(id);
        }

        [HttpGet]
        [Route("api/Traductor/DetailsCP/{CP}")]
        public IEnumerable<Traductor> DetailsByCP(String CP)
        {
            return objtraduct.GetTraductorByCP(CP);
        }

        [HttpGet]
        [Route("api/Traductor/DetailsDatos/{CP},{idioma},{servicio}")]
        public IEnumerable<DatosTraductor> DetailsDatos(string CP, string idioma,  string servicio)
        {
            return objtraduct.GetTraductorDatos(CP, idioma, servicio);
        }

        // Edit traductor data
        [HttpPut]
        [Route("api/Traductor/Edit")]
        public int Edit([FromBody]Traductor traductor)
        {
            return objtraduct.UpdateTraductor(traductor);
        }


        // Http DELETE DATA

        [HttpDelete]
        [Route("api/Traductor/Delete/{id}")]
        public int Delete(int id)
        {
            return objtraduct.DeleteTraductor(id);
        }

        [HttpDelete]
        [Route("api/Idioma/Delete/{idioma}")]
        public string DeleteLenguage(string idioma)
        {
            return objtraduct.DeleteLanguage(idioma);
        }

        [HttpDelete]
        [Route("api/Service/Delete/{servicio}")]
        public string DeleteService(string servicio)
        {
            return objtraduct.DeleteService(servicio);
        }

    }
}