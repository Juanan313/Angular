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


                    //SqlCommand cmd = new SqlCommand("GetTraductoresByCp", con);
                    //cmd.CommandType = CommandType.StoredProcedure;
                    //cmd.Parameters.AddWithValue("@CP", CP);
                    //con.Open();
                    //cmd.ExecuteNonQuery();
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

        //To Delete the record on a particular employee
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


        // DATA ACCESS SERVICIOS


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



    }



}
