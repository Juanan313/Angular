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
        //To View all employees details
        public IEnumerable<Traductor> GetAllTraductores()
        {
            try
            {
                List<Traductor> lsttraductores = new List<Traductor>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllEmployees", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Traductor traductor = new Traductor();
                        traductor.idTraductores = Convert.ToInt32(rdr["idTraductores"]);
                        traductor.Name = rdr["Name"].ToString();
                        traductor.LastName = rdr["LastName"].ToString();
                        traductor.Email = rdr["Email"].ToString();
                        traductor.Usuario = rdr["Usuario"].ToString();
                        traductor.Pass = rdr["Pass"].ToString();
                        traductor.CP = Convert.ToInt32(rdr["CP"]);
                        traductor.Tlfn = Convert.ToInt32(rdr["Tlfn"]);

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
        //To Add new employee record 
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
        //To Update the records of a particluar employee
        public int UpdateTraductor(Traductor traductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("UpdateTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idTraductores", traductor.idTraductores);
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
        //Get the details of a particular employee
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
                        traductor.idTraductores = Convert.ToInt32(rdr["idTraductores"]);
                        traductor.Name = rdr["Name"].ToString();
                        traductor.LastName = rdr["LastName"].ToString();
                        traductor.Email = rdr["Email"].ToString();
                        traductor.Usuario = rdr["Usuario"].ToString();
                        traductor.Pass = rdr["Pass"].ToString();
                        traductor.CP = Convert.ToInt32(rdr["CP"]);
                        traductor.Tlfn = Convert.ToInt32(rdr["Tlfn"]);
                    }
                }
                return traductor;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record on a particular employee
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
    }
}
