using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SPAtraductores.Models
{

    public class IdiomaDataAcces
    {
        string connectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog = 'SPA Traductores'; Integrated Security = True; Connect Timeout = 30; Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public IEnumerable<Idioma> GetAllLenguages()
        {
            try
            {
                List<Idioma> listLenguages = new List<Idioma>();
                using(SqlConnection con = new SqlConnection(connectionString))
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

    }
}
