import { getUser } from "../utils/user";

export const myAccount = () => {
  const user = getUser();

  const { email, role } = user.user;

  const adminMarkup = generateAdminActions(role);

  const markup = `
  <section class="section-my-account section-padding">
    <div class="my-account-welcome">
      <h1>
        Welcome
      </h1>
      <p>
        ${email}
      </p>    
    </div>
    </section>
    <section class="section-actions">
      <div class="container">        
        <ul class="actions">
          <li><a href="/logout"><h4>LOGOUT</h4></a></li>
        </ul>
      </div>    
    </section>
    
  ${adminMarkup}    
  
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};

const generateAdminActions = (role) => {
  if (role === "root" || role === "admin") {
    return `<section class="admin-actions">
    <div class="container"> 
    <div class="row">
      <ul class="actions">
      <li><a href="/cms?category=categories"><h4>CATEGORIES </h4></a></li> 
      <li><a href="/cms?category=projects"><h4>PROJECTS </h4></a></li> 
      </ul>      
    </div>       
  </div>
  </section>`;
  } else {
    return ``;
  }
};
