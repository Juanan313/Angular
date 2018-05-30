using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using SPAtraductores.Models;

namespace SPAtraductores.Models
{
    public class TraductorDataAccess
    {
        string connectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog = 'SPA Traductores'; Integrated Security = True; Connect Timeout = 30; Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        //To View all translator details
        public IEnumerable<Traductor> GetAllTraductores()
        {
            try
            {
                List<Traductor> lsttraductores = new List<Traductor>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("GetAllTraductores", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Traductor traductor = new Traductor();
                        traductor.ID = Convert.ToInt32(rdr["idTraductores"]);
                        traductor.Name = rdr["Name"].ToString();
                        traductor.LastName = rdr["LastName"].ToString();
                        traductor.Email = rdr["Email"].ToString();
                        traductor.Usuario = rdr["Usuario"].ToString();
                        traductor.Pass = rdr["Pass"].ToString();
                        traductor.CP = rdr["CP"].ToString();
                        traductor.Tlfn = rdr["Tlfn"].ToString();

                        lsttraductores.Add(traductor);
                    }
                    con.Close();
                }
                return lsttraductores;
            }
            catch
            {
                throw;
            }
        }
        //To Add new translator record 
        public int AddTraductor(Traductor traductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("AddTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Name", traductor.Name);
                    cmd.Parameters.AddWithValue("@LastName", traductor.LastName);
                    cmd.Parameters.AddWithValue("@Email", traductor.Email);
                    cmd.Parameters.AddWithValue("@Usuario", traductor.Usuario);
                    cmd.Parameters.AddWithValue("@Pass", traductor.Pass);
                    cmd.Parameters.AddWithValue("@CP", traductor.CP);
                    cmd.Parameters.AddWithValue("@Tlfn", traductor.Tlfn);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar translator
        public int UpdateTraductor(Traductor traductor)
        {
            try
            {

                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("UpdateTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idTraductores", traductor.ID);
                    cmd.Parameters.AddWithValue("@Name", traductor.Name);
                    cmd.Parameters.AddWithValue("@LastName", traductor.LastName);
                    cmd.Parameters.AddWithValue("@Email", traductor.Email);
                    cmd.Parameters.AddWithValue("@Usuario", traductor.Usuario);
                    cmd.Parameters.AddWithValue("@Pass", traductor.Pass);
                    cmd.Parameters.AddWithValue("@CP", traductor.CP);
                    cmd.Parameters.AddWithValue("@Tlfn", traductor.Tlfn);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular translator for edit
        public Traductor GetTraductorData(int id)
        {
            try
            {
                Traductor traductor = new Traductor();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM Traductores WHERE idTraductores= " + id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        traductor.ID = Convert.ToInt32(rdr["idTraductores"]);
                        traductor.Name = rdr["Name"].ToString();
                        traductor.LastName = rdr["LastName"].ToString();
                        traductor.Email = rdr["Email"].ToString();
                        traductor.Usuario = rdr["Usuario"].ToString();
                        traductor.Pass = rdr["Pass"].ToString();
                        traductor.CP = rdr["CP"].ToString(); 
                        traductor.Tlfn = rdr["Tlfn"].ToString();
                    }
                }
                return traductor;
            }
            catch
            {
                throw;
            }
        }


        //Get the ID of a particular translator
        public int GetTraductorId(string usuario)
        {
            try
            {   
                int ID = 0;
                Traductor traductor = new Traductor();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT idTraductores FROM Traductores WHERE Usuario = " + "'"+usuario+"'";
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        ID = Convert.ToInt32(rdr["idTraductores"]);
                    }
                }
                return ID;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular translator
        public IEnumerable<Traductor> GetTraductorByCP(String CP)
        {
            try
            {
                List<Traductor> lsttraductores = new List<Traductor>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM Traductores WHERE CP = " + CP;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Traductor traductor = new Traductor();
                        traductor.ID = Convert.ToInt32(rdr["idTraductores"]);
                        traductor.Name = rdr["Name"].ToString();
                        traductor.LastName = rdr["LastName"].ToString();
                        traductor.Email = rdr["Email"].ToString();
                        traductor.Usuario = rdr["Usuario"].ToString();
                        traductor.Pass = rdr["Pass"].ToString();
                        traductor.CP = rdr["CP"].ToString();
                        traductor.Tlfn = rdr["Tlfn"].ToString();

                        lsttraductores.Add(traductor);
                    }


                    con.Close();

                }
                return lsttraductores;
            }
            catch
            {
                throw;
            }
        }


        //Get the details of a particular translator
        public IEnumerable<DatosTraductor> GetTraductorDatos(String CP, String idioma, String servicio)
        {
            try
            {
                List<DatosTraductor> lsttraductores = new List<DatosTraductor>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("searchTraductors", con);
                    cmd.Parameters.AddWithValue("@CP", CP);
                    cmd.Parameters.AddWithValue("@Idioma", idioma);
                    cmd.Parameters.AddWithValue("@Servicio", servicio);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        DatosTraductor datosTraductor = new DatosTraductor();

                        datosTraductor.Email = rdr["Email"].ToString();
                        datosTraductor.Name = rdr["Name"].ToString();
                        datosTraductor.LastName = rdr["LastName"].ToString();
                        datosTraductor.CP = rdr["CP"].ToString();
                        datosTraductor.Tlfn = rdr["Tlfn"].ToString();
                        datosTraductor.Idioma = rdr["Idioma"].ToString();
                        datosTraductor.Servicio = rdr["Servicio"].ToString();
                        datosTraductor.idTraductor = Convert.ToInt32(rdr["idTraductores"]);
                        datosTraductor.idIdioma = Convert.ToInt32(rdr["idIdioma"]);
                        datosTraductor.idServicio = Convert.ToInt32(rdr["idServicio"]);

                        lsttraductores.Add(datosTraductor);
                    }

                    con.Close();

                }
                return lsttraductores;
            }
            catch
            {
                throw;
            }
        }


        //To Delete the record on a particular translator
        public int DeleteTraductor(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("DeleteTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idTraductores", id);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // DATA ACCESS IDIOMAS


        public IEnumerable<Idioma> GetAllLenguages()
        {
            try
            {
                List<Idioma> listLenguages = new List<Idioma>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("GetAllIdiomas", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Idioma idioma = new Idioma();
                        idioma.lenguage = rdr["Idioma"].ToString();
                        idioma.id = Convert.ToInt32(rdr["IdIdioma"]);
                        listLenguages.Add(idioma);
                    }

                    con.Close();
                }
                return listLenguages;
            }

            catch
            {
                throw;
            }
        }

        public string AddLanguage(Idioma idioma)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("AddLanguage", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idioma", idioma.lenguage);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return idioma.lenguage;
            }
            catch
            {
                throw;
            }
        }

        // Añade Idioma al traductor, tabla intermedia

        public int AddIdiomaToTranslator(int parIDIdioma, int parIDTraductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("addIdiomaToTrad", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IdIdioma", parIDIdioma);
                    cmd.Parameters.AddWithValue("@IdTraductor", parIDTraductor);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }


        // devuelve una lista de los idiomas hablados por un traductor

        public IEnumerable<Idioma> getIdiomasHablados( int idTraductor)
        {
            try
            {
                List<Idioma> listLenguages = new List<Idioma>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT Idioma, IdIdioma FROM Idiomas INNER JOIN dbo.TraductoresQueHablan ON Idiomas_IdIdioma = IdIdioma WHERE Traductores_idTraductores = "+ idTraductor +"ORDER BY Idioma";
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Idioma idioma = new Idioma();
                        idioma.lenguage = rdr["Idioma"].ToString();
                        idioma.id = Convert.ToInt32(rdr["IdIdioma"]);
                        listLenguages.Add(idioma);
                    }

                    con.Close();

                }
                return listLenguages;
            }
            catch
            {
                throw;
            }
        }


        //To Delete the record of a particular language
        public string DeleteLanguage(String idioma)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("DeleteLanguage", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Language", idioma);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return idioma;
            }
            catch
            {
                throw;
            }
        }

        //Borra todos los idiomas hablados por un traductor

        public int DeleteLangServFromTRad(int idTraductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "DELETE FROM TraductoresServicio WHERE Traductores_idTraductores =" + idTraductor;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    cmd.CommandText = "DELETE FROM TraductoresQueHablan WHERE Traductores_idTraductores =" + idTraductor;
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1; 
            }

            catch
            {
                throw;
            }
        }


        // DATA ACCESS SERVICIOS

        // Lista todos los servicios de la BD
        public IEnumerable<Servicio> GetAllServices()
        {
            try
            {
                List<Servicio> serviceList = new List<Servicio>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("GetAllServicios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Servicio servicio = new Servicio();
                        servicio.service = rdr["Servicio"].ToString();
                        servicio.id = Convert.ToInt32(rdr["IdServicio"]);

                        serviceList.Add(servicio);
                    }

                    con.Close();
                }
                return serviceList;
            }

            catch
            {
                throw;
            }
        }

        // Añade un servicio
        public string AddService(Servicio servicio)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("AddService", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Service", servicio.service);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return servicio.service;
            }
            catch
            {
                throw;
            }
        }

        // Añade Servicio al traductor, tabla intermedia

        public int AddTraductoServicio(int parIDServicios, int parIDTraductor)
        {


            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("addServToTrad", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IdServicio", parIDServicios);
                    cmd.Parameters.AddWithValue("@IdTraductor", parIDTraductor);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch (SqlException sqlEx)
            {
                throw sqlEx;
            }
            catch (Exception ex)
            {
                throw ex;
            } 
            finally
            {
                
            }
        }


        // Servicios para los que se especializa X traductor

        public IEnumerable<Servicio> getServiciosTraductor(int idTraductor)
        {
            try
            {
                List<Servicio> serviceList = new List<Servicio>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT Servicio, IdServicio FROM TraductoresServicio inner join Servicio ON IdServicio = Servicio_IdServicio WHERE Traductores_idTraductores = " + idTraductor;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Servicio servicio = new Servicio();
                        servicio.service = rdr["Servicio"].ToString();
                        servicio.id = Convert.ToInt32(rdr["IdServicio"]);

                        serviceList.Add(servicio);
                    }

                    con.Close();

                }
                return serviceList;
            }
            catch(SqlException ex)
            {


                throw ex;
            }
        }



        //To Delete the record of a service
        public string DeleteService(String service)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("DeleteService", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Service", service);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return service;
            }
            catch
            {
                throw;
            }
        }


        /* ----- PETICIONES ------*/

        // Añadir peticion a base de datos
        public int AddRequest(Peticion request)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("AddRequest", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IdIdioma", request.IdIdioma);
                    cmd.Parameters.AddWithValue("@IdServicio", request.IdServicio);
                    cmd.Parameters.AddWithValue("@IdTraductor", request.idTraductor);
                    cmd.Parameters.AddWithValue("@Name", request.NombreSolicitante);
                    cmd.Parameters.AddWithValue("@Description", request.Descripcion);
                    cmd.Parameters.AddWithValue("@Email", request.Email);
                    cmd.Parameters.AddWithValue("@Tlfn", request.Tlfn);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<MostrarPeticion> getRequestForTranslator(int idTraductor)
        {
            try
            {
                List<MostrarPeticion> requestList = new List<MostrarPeticion>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT NombreSolicitante, Email, Descripcion, Telefono, Idioma, Servicio FROM Peticiones inner join Idiomas " +
                        "on Peticiones.IdIdioma = Idiomas.IdIdioma inner join Servicio ON Servicio.IdServicio = Peticiones.IdServicio WHERE idTraductor =" + idTraductor;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        MostrarPeticion request = new MostrarPeticion();
                        request.NombreSolicitante = rdr["NombreSolicitante"].ToString();
                        request.Email = rdr["Email"].ToString();
                        request.Descripcion = rdr["Descripcion"].ToString();
                        request.Tlfn = rdr["Telefono"].ToString();
                        request.Idioma = rdr["Idioma"].ToString();
                        request.Servicio = rdr["Servicio"].ToString();
                        

                        requestList.Add(request);
                    }

                    con.Close();

                }
                return requestList;
            }
            catch
            {
                throw;
            }
        }

    }



}
