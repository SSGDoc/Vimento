using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vimento.Model
{
    public class Address
    {
        public int AddressID { get; set; }
        public String StreetName { get; set; }
        public int HouseNr { get; set; }
        public int ZipCode { get; set; }
        public String City { get; set; }
        public double Lat { get; set; }
        public double Long { get; set; }
        public Technology Technology { get; set; }
        

        public Address()
        {

        }

    }
}