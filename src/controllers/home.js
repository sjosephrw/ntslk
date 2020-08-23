import { slides, welcome, features, phrase } from "../views/home";

export const homeController = () => {
  slides();
  welcome();
  features();
  //phrase();

  //event listeners
  const showFirstSlideOnPageLoad = () => {
    const slides = document.querySelectorAll(".slides");

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

  const index = i => {
    //select all the slides
    const slides = document.querySelectorAll(".slides");

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

  document.querySelector(".move-left").addEventListener("click", e => {
    e.preventDefault();
    index(-1);
  });

  document.querySelector(".move-right").addEventListener("click", e => {
    e.preventDefault();

    index(+1);
  });
};
