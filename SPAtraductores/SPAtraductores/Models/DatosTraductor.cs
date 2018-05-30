using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPAtraductores.Models
{
    public class DatosTraductor
    {

        public String Email { get; set; }
        public String Name { get; set; }
        public String LastName { get; set; }
        public String CP { get; set; }
        public String Tlfn { get; set; }
        public String Idioma { get; set; }
        public String Servicio { get; set; }
        public int idTraductor { get; set; }
        public int idIdioma { get; set; }
        public int idServicio { get; set; }
        public String Imagen { get; set;  }
    }
}
