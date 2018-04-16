using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPAtraductores.Models
{
    public class Traductor
    {

        public int idTraductores { get; set; }
        public String Email { get; set; }
        public String Usuario { get; set; }
        public String Pass { get; set; }
        public String Name { get; set; }
        public String LastName { get; set; }
        public int CP { get; set; }
        public int Tlfn { get; set; }

    }
}
