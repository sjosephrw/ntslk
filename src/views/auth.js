export const auth = () => {
  const markup = `
  <section class="section-title section-padding text-center">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding">
        <h3>SIGN IN / SIGN UP [ADMIN ONLY]</h3>
      </div>
    </div>
  </div>
</section> 
<section class="section-full-height">
  <div class="container">
    <div class="row">
      <div class="col-2 col-padding">
        <form class="form-sign-in">
          <input type="text" name="email" value="" id="email-sign-in" placeholder="Enter Email">
          <input type="password" name="password" value="" id="password-sign-in" placeholder="Enter password">
          <button type="submit" class="btn btn-primary full-width" id="btn-sign-in">SIGN IN</button>
        </form>  
      </div>
      <div class="col-2 col-padding">
        <form class="form-sign-up">
          <input type="text" name="email" value="" id="email" placeholder="Enter Email">
          <input type="password" name="password" value="" id="password" placeholder="Enter password">
          <input type="password" name="passwordConfirm" value="" id="passwordConfirm" placeholder="Enter Confirm password">
          <button type="submit" class="btn btn-primary full-width" id="btn-sign-up">SIGN UP</button>
        </form>
      </div>      
    </div>
  </div>  
</section> 
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
