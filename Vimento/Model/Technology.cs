using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vimento.Model
{
    public class Technology
    {

        public int DownFiber { get; set; }
        public int UpFiber { get; set; }
        public int DownCable { get; set; }
        public int UpCable { get; set; }
        public int DownDSL { get; set; }
        public int UpDSL { get; set; }
        public string MobileDownRange { get; set; }

        public Technology()
        {

        }
    }
}