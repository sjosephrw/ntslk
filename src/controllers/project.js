import { errRedirect } from "../utils/redirect";

import { projects, generateProjects } from "../views/projects";

export const projectController = async (objInstance) => {
  await objInstance.getProjects();

  if (objInstance.res.status !== 200) {
    errRedirect(objInstance.res.status, objInstance.res.msg);
  }

  projects(generateProjects(objInstance.res.data));

  //event listeners
  const showFirstSlideOnPageLoad = () => {
    const slides = document.querySelectorAll(".box-slider");

    //hide all the slides
    for (let a = 0; a < slides.length; a++) {
      //slides[a].style.display = "none";
      slides[a].classList.remove("show");
      slides[a].classList.add("hide");
    }

    //slides[0].style.display = "block";
    slides[0].classList.remove("hide");
    slides[0].classList.add("show");
  };

  showFirstSlideOnPageLoad();

  const index = (i) => {
    //select all the slides
    const slides = document.querySelectorAll(".box-slider");

    //hide all the slides
    for (let a = 0; a < slides.length; a++) {
      //slides[a].style.display = "none";
      slides[a].classList.remove("show");
      slides[a].classList.add("hide");
    }

    //slides[y].style.display = "block";
    slides[y].classList.remove("hide");
    slides[y].classList.add("show");

    y = y + 1;

    if (y < 0) {
      y = slides.length - 1;
    }

    if (y >= slides.length) {
      y = 0;
    }

    console.log(y);
  };

  let y = 0;

  document.querySelector(".slider-left").addEventListener("click", (e) => {
    e.preventDefault();
    index(-1);
  });

  document.querySelector(".slider-right").addEventListener("click", (e) => {
    e.preventDefault();

    index(+1);
  });

  const hideProjectDetails = () => {
    document.querySelector(".project-details").classList.add("hide");
    document.querySelector(".project-details").classList.remove("show");
  };

  const showProjectDetails = () => {
    document.querySelector(".project-details").classList.add("show");
    document.querySelector(".project-details").classList.remove("hide");
  };

  hideProjectDetails();

  document.querySelector(".slider").addEventListener("click", async (e) => {
    //console.log(e.target.parentNode.parentNode.id);

    if (e.target.id === "view-project-details") {
      e.preventDefault();

      document.getElementById("view-project-details").disabled = true;

      const id = e.target.parentNode.parentNode.id.split("-")[1];

      await objInstance.getProject(id);

      if (objInstance.res.status !== 200) {
        errRedirect(objInstance.res.status, objInstance.res.msg);
      }

      showProjectDetails();

      //console.log("test", objInstance.res.data);
      document.querySelector(".box-project-details").innerHTML =
        objInstance.res.data.description;
    }
  });

  document
    .querySelector(".close-project-details")
    .addEventListener("click", (e) => {
      e.preventDefault();
      hideProjectDetails();
      document.getElementById("view-project-details").disabled = false;
    });
};
