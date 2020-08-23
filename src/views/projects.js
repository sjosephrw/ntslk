import { getUser } from "../utils/user";

export const projects = (projects) => {
  const user = getUser();

  let addProjectBtn = ``;

  if (user.user !== null && user.user.role !== "user") {
    addProjectBtn = `<div class="row">
      <div class="col-1 col-padding">
        <a href="/cms?category=projects&action=add" class="btn btn-primary full-width"><i class="fas fa-plus"></i></a>  
      </div>
    </div>`;
  }

  const markup = `<section class="section-title section-padding text-center section-position">
  <div class="project-details">
    <div class="header-project-details"><i class="fas fa-times close-project-details"></i></div>
      <div class="body-project-details">
        <div class="box-project-details">
      
        </div>      
      </div> 
  </div>
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding" style="margin: 5px 0;">
        <h3>PROJECTS</h3>
      </div>
    </div>
  </div>
</section>
<section class="section-products">
  <div class="container">
  ${addProjectBtn}
    <div class="row">
      <div class="col-1 col-padding" style="margin: 5px 0;position: relative;">
        <div class="slider-navi">
          <i class="fas fa-arrow-circle-left slider-left"></i>
          <i class="fas fa-arrow-circle-right slider-right"></i>
          <div class="clearfix"></div>
        </div>

        <div class="slider">
          ${projects}
        </div>
      </div>
    </div>
  </div>
</section>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};

const project = (_id, name, image) => {
  const user = getUser();

  let editDeleteProjectBtn = ``;

  if (user.user !== null && user.user.role !== "user") {
    editDeleteProjectBtn = `<br><a href="/cms?category=projects&action=edit&id=${_id}" class="btn btn-primary full-width"><i class="far fa-edit"></i>&nbsp;&nbsp;EDIT</a>
    <br><a href="/cms?category=projects&action=delete&id=${_id}" class="btn btn-danger full-width"><i class="fas fa-trash"></i>&nbsp;&nbsp;DELETE</a>`;
  }

  const markup = `
<div class="box-slider" id="project-${_id}">
  <div class="box-background">
  </div>
  <div class="header-slider">
  </div>
  <div class="body-slider">
    <div class="img-slider">
      <img src="${image}" alt="project">
    </div>
    <div class="name-slider">
      <h4>${name}</h4>
    </div>
   </div>

   <div class="footer-slider">
    <a href="#" class="btn btn-primary" id="view-project-details">VIEW</a>
    ${editDeleteProjectBtn}
   </div>      
</div>`;
  return markup;
};

export const generateProjects = (projects) => {
  if (projects.length === 0) {
    return `<section class="section-projects section-padding text-center section-full-height">
    <div class="container">
      <div class="row">
        <div class="col-1 col-padding">
          No projects to display.
        </div>
      </div>
    </div>
  </section>`;
  }

  let ids = projects.map((el) => {
    return el._id;
  });

  let names = projects.map((el) => {
    return el.name;
  });

  let images = projects.map((el) => {
    return el.image;
  });

  const projectString = [];

  for (let x = 0; x < ids.length; x++) {
    projectString.push(project(ids[x], names[x], images[x]));
  }

  let string = "";
  string = projectString.toString();
  string = string.replace(/,/g, "");
  return string;
};
