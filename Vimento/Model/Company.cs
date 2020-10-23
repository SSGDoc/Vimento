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
        public int CompanyID { get; set; }
        public Address Address { get; set; }
        public Company()
        {
            Address = new Address();
        }

    }
}