using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Vimento.DataAccess;
using Vimento.Model;

namespace Vimento.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            CompanyData cd = new CompanyData();
            List<Company> Companies = new List<Company>();
            Companies = cd.GetAllCompanies();

            ViewBag.Name = "Companies";

            return View("index", Companies);
        }

        public ActionResult Design()
        {
            ViewBag.Message = "dit design";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Gmap()
        {
            return View();
        }

        public ActionResult Charts()
        {
            return View();
        }

        public ActionResult ArcGisMap()
        {
            return View();
        }

        public ActionResult Leaflet()
        {
            return View();
        }

        public ActionResult TestView()
        {
            CompanyData cd = new CompanyData();
            List<Company> Companies = new List<Company>();
            Companies = cd.GetAllCompanies();

            ViewBag.Name = "Companies";

            return View("TestView", Companies);
        }
    }
}