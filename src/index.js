import Navigo from "navigo";

//utils
import { redirect } from "./utils/redirect";

//controllers
import { categoryController } from "./controllers/category";
import { homeController } from "./controllers/home";
import { authController } from "./controllers/auth";
import { errorController } from "./controllers/error";
import { myAccountController } from "./controllers/myAccount";
import {
  productController,
  productDetailsController
} from "./controllers/product";
import { contactController } from "./controllers/contact";
import { projectController } from "./controllers/project";
import { servicesController } from "./controllers/services";
import { aboutController } from "./controllers/about";
import { cmsController } from "./controllers/cmsController";

//models
import User from "./models/user";
import Category from "./models/category";
import Product from "./models/product";
import Project from "./models/project";

const state = {};

state.user = new User();
state.category = new Category();
state.product = new Product();
state.project = new Project();

if ("serviceWorker" in navigator) {

  console.log("load");
  navigator.serviceWorker
    .register("./sw.js")
    .then(function(registration) {
      // Registration was successful
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration
      );
    })
    .catch(function(err) {
      console.log(err);
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    });

} else {
  console.log("No service worker support");
}

var router = new Navigo(window.location.origin);

if (window.location.protocol !== "https:") {
  window.location.replace(
    `https:${window.location.href.substring(window.location.protocol.length)}`
  );
}

router
  .notFound(function () {
    categoryController(state.category);
    errorController(
      404,
      `The page you requested can not be found on our server!`
    );
  })
  .on({
    "/": function () {
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";
      homeController();
    },
    "/category/:id": function (params, query) {
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";
      productController(state.category, params.id);
    },
    "/product/:id": function (params, query) {
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";
      productDetailsController(state.product, params.id);
    },
    "/projects": function () {
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";
      projectController(state.project);
    },
    "/auth": function () {
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";
      if (state.user.isLoggedIn === true) {
        redirect("/my-account");
      } else {
        authController(state.user);
      }
    },
    "/my-account": function () {
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";

      if (state.user.isLoggedIn === false) {
        redirect("/auth");
      } else {
        myAccountController();
      }
    },
    "/contact": function (params, query) {
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";
      contactController(query, state.user);
    },
    "/services": function () {
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";
      servicesController();
    },
    "/about": function () {
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";
      aboutController();
    },
    "/cms": async function (params, query) {
      //for admin and root
      categoryController(state.category);
      document.getElementById("app").innerHTML = "";

      const data = {
        categories: state.category,
        products: state.product,
        projects: state.project
      };

      if (
        state.user.isLoggedIn &&
        state.user.role !== null &&
        state.user.role !== "user"
      ) {
        cmsController(query, data);
      } else if (state.user.isLoggedIn === true && state.user.admin === false) {
        errorController(403, "You are not Authorized to view this page");
      } else {
        errorController(401, "You must login to view this page");
      }
    },
    "/logout": function () {
      window.localStorage.clear();
      redirect("/auth");
    },
    "/err/:s/:m": async function (params) {
      categoryController(state.category);
      errorController(params.s, params.m);
    }
  })
  .resolve();
  
  console.log("IT WORKS");

  const el = {
    menu: document.querySelector(".drawer"),
    bars: document.querySelector(".fa-bars"),
    close: document.querySelector(".menu-close"),
    toggleMenu: document.querySelector(".__js-menu-toggle"),
    subMenu1: document.querySelector(".menu-products")
  };

  const init = () => {
    el.bars.classList.remove("hide");
    el.bars.classList.add("show");

    el.close.classList.remove("show");
    el.close.classList.add("hide");

    el.menu.classList.remove("show");
    el.menu.classList.add("hide");

    el.subMenu1.classList.remove("show");
    el.subMenu1.classList.add("hide");
  };

  const menuActive = () => {
    el.bars.classList.remove("show");
    el.bars.classList.add("hide");

    el.close.classList.remove("hide");
    el.close.classList.add("show");

    el.menu.classList.remove("hide");
    el.menu.classList.add("show");
  };

  const menuInActive = () => {
    el.bars.classList.remove("hide");
    el.bars.classList.add("show");

    el.close.classList.remove("show");
    el.close.classList.add("hide");

    el.menu.classList.remove("show");
    el.menu.classList.add("hide");
  };

  init();

  el.toggleMenu.addEventListener("click", (e) => {
    e.preventDefault();
    if (el.bars.classList.contains("show")) {
      menuActive();
    } else {
      menuInActive();
    }
  });

  el.menu.addEventListener("click", (e) => {
    //e.preventDefault();
    if (e.target.classList.contains("toggle-submenu")) {
      const parent = e.target.parentNode;
      const submenu = parent.childNodes[3];

      //console.log(submenu, parent);
      if (submenu.classList.contains("show")) {
        submenu.classList.remove("show");
        submenu.classList.add("hide");
      } else if (submenu.classList.contains("hide")) {
        submenu.classList.remove("hide");
        submenu.classList.add("show");
      }
    } else if (e.target.classList.contains("fa-plus")) {
      const parent = e.target.parentNode.parentNode;
      const submenu = parent.childNodes[3];

      //console.log(submenu, parent);
      if (submenu.classList.contains("show")) {
        submenu.classList.remove("show");
        submenu.classList.add("hide");
      } else if (submenu.classList.contains("hide")) {
        submenu.classList.remove("hide");
        submenu.classList.add("show");
      }
    }
  });  
