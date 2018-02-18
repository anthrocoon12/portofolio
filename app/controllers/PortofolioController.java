package controllers;

import play.mvc.Controller;
import play.mvc.Result;

public class PortofolioController extends Controller {

    public Result portofolioPage() {
        return ok(views.html.main.render());
    }
}