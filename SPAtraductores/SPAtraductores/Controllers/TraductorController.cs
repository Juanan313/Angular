
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

        /* Añadir servicio a un traductor con post no funciona

        [HttpPost]
        [Route("api/Servicio/AddServTrad/{idServicio},{idTraductor}")]
        public int AddServiceToTrad([FromBody] int idServicio, int idTraductor)
        {
            return objtraduct.AddServiceToTranslator(idServicio, idTraductor);
        } */

        [HttpGet]
        [Route("api/Traductor/Createservicio/{idservicios},{idtraductor}")]
        public int Createservicio(int idservicios, int idtraductor)
        {
            return objtraduct.AddTraductoServicio(idservicios, idtraductor);
        }

        // Añadir idioma a un traductor

        //Añadir idioma a un traductor
        [HttpGet]
        [Route("api/Traductor/Createidioma/{ididioma},{idtraductor}")]
        public int Createidioma(int ididioma, int idtraductor)
        {
            return objtraduct.AddTraductorIdioma(ididioma, idtraductor);
        }

        //[HttpPost]
        //[Route("api/Idioma/AddLangTrad/{idIdioma},{idTraductor}")]
        //public int AddLangToTrad(/*[FromBody]*/ int idIdioma, int idTraductor)
        //{
        //    return objtraduct.AddIdiomaToTranslator(idIdioma, idTraductor);
        //}


        // Get the data of a traductor by id

        [HttpGet]
        [Route("api/Traductor/Details/{id}")]
        public Traductor Details(int id)
        {
            return objtraduct.GetTraductorData(id);
        }

        [HttpGet]
        [Route("api/Traductor/DetailsId/{usuario}")]
        public int DetailsId(string usuario)
        {
            return objtraduct.GetTraductorId(usuario);
        }

        [HttpGet]
        [Route("api/Traductor/DetailsCP/{CP}")]
        public IEnumerable<Traductor> DetailsByCP(String CP)
        {
            return objtraduct.GetTraductorByCP(CP);
        }

        [HttpGet]
        [Route("api/Traductor/Services/{id}")]
        public IEnumerable<Servicio> tradServices(int id)
        {
            return objtraduct.getServiciosTraductor(id);
        }

        [HttpGet]
        [Route("api/Traductor/Languages/{id}")]
        public IEnumerable<Idioma> tradLanguages(int id)
        {
            return objtraduct.getIdiomasHablados(id);
        }


        /* Datos de traductor buscando por CP , idioma y servicio */
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