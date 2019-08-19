using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProfileApp.Controllers
{
    public class DashController : Controller
    {
        // GET: Dash
        public ActionResult Dash()
        {
            return View("Dashboard");
        }
    }
}