using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPAtraductores.Models
{
    public class Peticion
    {
        public int IdIdioma { get; set; }
        public int IdServicio { get; set; }
        public int idTraductor { get; set; }
        public String NombreSolicitante { get; set; }
        public String Descripcion { get; set; }
        public String Email { get; set; }
        public String Tlfn { get; set; }
    }
}
