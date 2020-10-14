using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vimento.Model
{
    public class Technology
    {
        public String Name { get; set; }
        public decimal MaxUp { get; set; }
        public decimal MaxDown { get; set; }
        public string MobileDownRange { get; set; }

        public Technology()
        {

        }
    }
}