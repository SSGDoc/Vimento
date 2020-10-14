using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vimento.Model
{
    public class Address
    {
        public String Name { get; set; }
        public int HouseNr { get; set; }
        public int ZipCode { get; set; }
        public String City { get; set; }
        public Coordinate Coordinates { get; set; }
        public List<Technology> Technologies { get; set; }
        public int TheKey { get; set; }

        public Address(
            //int TheKey, String Name, int HouseNr, int ZipCode, String City, Coordinate Coordinates, Technology Technology
            )
        {
            //this.Name = Name;
            //this.HouseNr = HouseNr;
            //this.ZipCode = ZipCode;
            //this.City = City;
            //this.Coordinates = Coordinates;
            //this.Technology = Technology;
            //this.TheKey = TheKey;
        }

    }
}