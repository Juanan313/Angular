
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
            IEnumerable<Traductor> traductorList;

            try
            {
                traductorList = objtraduct.GetAllTraductores();
            }

            

            catch (NullReferenceException nullEx)
            {

                throw nullEx;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return traductorList;
        }
 


        [HttpGet]
        [Route("api/Idioma/Index")]
        public IEnumerable<Idioma> IndexLanguage()
        {
            IEnumerable<Idioma> langList;

            try
            {
                langList = objtraduct.GetAllLenguages();
            }
            catch (NullReferenceException nullEx)
            {
                throw nullEx;
            }

            catch (Exception ex)
            {

                throw ex;
            }

            return langList;
        }

        [HttpGet]
        [Route("api/Servicio/Index")]
        public IEnumerable<Servicio> IndexServices()
        {
            IEnumerable<Servicio> serviceList;

            try
            {
                serviceList = objtraduct.GetAllServices();
            }
            catch (NullReferenceException nullEx)
            {
                throw nullEx;
            }

            catch (Exception ex)
            {

                throw ex;
            }

            return serviceList;
        }

        [HttpGet]
        [Route("api/Peticion/Pendiente/{idTraductor}")]
        public IEnumerable<MostrarPeticion> IndexPeticiones(int idTraductor)
        {

            IEnumerable<MostrarPeticion> requestList;

            try
            {
                requestList = objtraduct.getRequestForTranslator(idTraductor);
            }
            catch (NullReferenceException nullEx)
            {
                throw nullEx;
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return requestList;

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

        // Añadir peticion
        [HttpPost]
        [Route("api/Peticion/Create")]
        public int CreateRequest([FromBody] Peticion request)
        {
            return objtraduct.AddRequest(request);
        }

        //Añadir servicio a un traductor con post no funciona

       //       int.TryParse(objeto.IdServicio.ToString(),out numero1))
       

       [HttpPost]
       [Route("api/Traductor/CreateServicio")]
        public int AddServiceToTrad([FromBody] objectToSend objeto)
        {
            int result;

            try
            {
                if (objeto.idServicio != null
                    && objeto.idTraductor != null)
                {
                    result = objtraduct.AddTraductoServicio(objeto.idServicio, objeto.idTraductor);
                }
                else
                {
                    result = -1;
                }

            }
            catch (NullReferenceException  nullEx)
            {

                throw nullEx;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return result;
        }

        //[HttpGet]
        //[Route("api/Traductor/Createservicio/{idservicios},{idtraductor}")]
        //public int Createservicio(int idservicios, int idtraductor)
        //{
        //    return objtraduct.AddTraductoServicio(idservicios, idtraductor);
        //}

        // Añadir idioma a un traductor

        //Añadir idioma a un traductor
        //[HttpGet]
        //[Route("api/Traductor/Createidioma/{ididioma},{idtraductor}")]
        //public int Createidioma(int ididioma, int idtraductor)
        //{
        //    return objtraduct.AddTraductorIdioma(ididioma, idtraductor);
        //}

        [HttpPost]
        [Route("api/Traductor/CreateIdioma")]
        public int AddLangToTrad([FromBody] objectToSend objeto)
        {
            int result;

            try
            {
                if (objeto.idIdioma != null
                    && objeto.idTraductor != null)
                {
                    result = objtraduct.AddIdiomaToTranslator(objeto.idIdioma, objeto.idTraductor);
                }
                else
                {
                    result = -1;
                }

            }
            catch (NullReferenceException nullEx)
            {

                throw nullEx;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return result;
        }


        // Get the data of a traductor by id

        [HttpGet]
        [Route("api/Traductor/Details/{id}")]
        public Traductor Details(int id)
        {

            Traductor traductor;

            try
            {
                traductor = objtraduct.GetTraductorData(id);
            }
            catch (NullReferenceException nullEx)
            {

                throw nullEx;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return traductor;
        }

        [HttpGet]
        [Route("api/Traductor/DetailsId/{usuario}")]
        public int DetailsId(string usuario)
        {
            int idTraductor;

            try
            {
                idTraductor = objtraduct.GetTraductorId(usuario);
            }
            catch (NullReferenceException nullEx)
            {

                throw nullEx;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return idTraductor;
        }

        [HttpGet]
        [Route("api/Traductor/DetailsCP/{CP}")]
        public IEnumerable<Traductor> DetailsByCP(String CP)
        {
            
            IEnumerable<Traductor> traductorList;

            try
            {
                traductorList = objtraduct.GetTraductorByCP(CP);
            }
            catch (NullReferenceException nullEx)
            {

                throw nullEx;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return traductorList;
        }

        [HttpGet]
        [Route("api/Traductor/Services/{id}")]
        public IEnumerable<Servicio> tradServices(int id)
        {

            IEnumerable<Servicio> servicioList;

            try
            {
                servicioList = objtraduct.getServiciosTraductor(id);
            }
            catch (NullReferenceException nullEx)
            {

                throw nullEx;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return servicioList;
        }

        [HttpGet]
        [Route("api/Traductor/Languages/{id}")]
        public IEnumerable<Idioma> tradLanguages(int id)
        {
            IEnumerable<Idioma> languageList;

            try
            {
                languageList = objtraduct.getIdiomasHablados(id);
            }
            catch (NullReferenceException nullEx)
            {

                throw nullEx;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return languageList;
        }


        /* Datos de traductor buscando por CP , idioma y servicio */
        [HttpGet]
        [Route("api/Traductor/DetailsDatos/{CP},{idioma},{servicio}")]
        public IEnumerable<DatosTraductor> DetailsDatos(string CP, string idioma,  string servicio)
        {
            IEnumerable<DatosTraductor> traductorList;

            try
            {
                traductorList = objtraduct.GetTraductorDatos(CP,idioma,servicio);
            }
            catch (NullReferenceException nullEx)
            {

                throw nullEx;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return traductorList;
        }

        


        // Edit traductor data
        [HttpPut]
        [Route("api/Traductor/Edit")]
        public int Edit([FromBody]Traductor traductor)
        {
            int result;

            try
            {
                result = objtraduct.UpdateTraductor(traductor);
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return result;
        }


        // Http DELETE DATA

        [HttpDelete]
        [Route("api/Traductor/Delete/{id}")]
        public int Delete(int id)
        {
            int result;

            try
            {
                result = objtraduct.DeleteTraductor(id);
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return result;
        }

        [HttpDelete]
        [Route("api/Idioma/Delete/{idioma}")]
        public string DeleteLenguage(string idioma)
        {
            
            string result;

            try
            {
                result = objtraduct.DeleteLanguage(idioma);
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return result;
        }

        [HttpDelete]
        [Route("api/Service/Delete/{servicio}")]
        public string DeleteService(string servicio)
        {

            string result;

            try
            {
                result = objtraduct.DeleteService(servicio);
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return result;
        }

        // Elimina todos los registros de idiomas y servicios de un traductor
        [HttpDelete]
        [Route("api/Traducotr/DeleteLangServ/{idTraductor}")]
        public int DeleteLangServFromTrad(int idTraductor) 
        {

            int result;

            try
            {
                result = objtraduct.DeleteLangServFromTRad(idTraductor);
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return result;
        }

    }
}

//public class objetoClase
//{
//    public int idServicio;

//    public int idTraductor;

//    public int idIdioma;
//}
