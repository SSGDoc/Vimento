using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vimento.Model
{
    public class Company
    {
        public String Name { get; set; }
        public String Business { get; set; }
        public int AmountOfEmployees { get; set; }
        //public List<Address> Addresses { get; set; }
        public string Street { get; set; }
        public int HouseNr { get; set; }
        public int ZipCode { get; set; }
        public string City { get; set; }
        public Coordinate Coordinates { get; set; }
        public int TheKey { get; set; }
        public Company()
        {
            Coordinates = new Coordinate();
        }

    }
}