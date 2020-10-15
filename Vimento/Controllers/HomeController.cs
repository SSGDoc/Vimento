using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vimento.DataAccess;
using Vimento.Model;
using Vimento.DataAccess;

namespace Vimento.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            CompanyData cd = new CompanyData();
            List<Company> companies = new List<Company>();
            companies = cd.GetAllCompanies();

            ViewBag.Name = companies;

            return View("index", companies);
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
            return View();
        }
    }
}