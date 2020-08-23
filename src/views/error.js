export const error = (statusCode, msg) => {
  const markup = `
  <section class="section-title section-padding text-center">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding">
        <h3>ERRORS OCCURED</h3>
      </div>
    </div>
  </div>
</section> 
<section class="section-errors section-full-height">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding text-center">
        <h1 class="error-status-code">${statusCode}</h1>
        <p class="error-msg">${msg}</p>
      </div>      
    </div>
  </div>  
</section> 
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
