export const about = () => {
  const markup = `
  <section class="section-hero-img">
  <div class="hero-text">
    <h1>ABOUT US</h1>
    <p>Elevators and Escalator etc....</p>
  </div>
</section>
<section class="section-features section-padding text-center">
  <div class="container">
    <div class="row">
      <div class="col-3 col-padding">
        <h4>INSTALLATION</h4>
        <h3 style="font-size: 500% !important;"><i class="fas fa-tools"></i></h3>
      </div>
      <div class="col-3 col-padding">
        <h4>MAINTAINENCE</h4>
        <h3 style="font-size: 500% !important;"><i class="fas fa-cog"></i></h3>
      </div>
      <div class="col-3 col-padding">
        <h4>REPAIRS</h4>
        <h3 style="font-size: 500% !important;"><i class="fas fa-wrench"></i></h3>
      </div>
    </div>

  </div>
</section>
<section class="section-why-us section-padding">
  <div class="container">
    <div class="row">
      <div class="col-2 col-padding">
        <div class="img-frame">
          <img src="https://res.cloudinary.com/djsyg3fii/image/upload/v1596702977/6_ewkdkg.jpg" alt="Image">
        
        </div>
      </div>
      <div class="col-2 col-padding">
        <h3>ABOUT US</h3>
        <p>
        Our goal is to provide you, our customer, and the highest quality service at a competitive price. Every product we sell must meet our stringent standards for quality and performance. We are dedicated to protecting your investment, reducing your liability and providing assurance that your transportation equipment performs reliably and safely.        </p>
      </div>
    </div>

  </div>
</section>
<section class="section-why-us section-padding">
  <div class="container">
    <div class="row">
      <div class="col-2 col-padding">
        <h3>OUR VISION</h3>
        <p>
        Our vision is for every building to have a consistently reliable elevator for its residents and visitors. We are committed to continuous technological innovation, service excellence, and most importantly the satisfaction of our customers.        </p>
      </div>
      <div class="col-2 col-padding">
        <div class="img-frame">
          <img src="https://res.cloudinary.com/djsyg3fii/image/upload/v1596702977/3_xaquob.jpg" alt="Image">  
        </div>
      </div>
    </div>

  </div>
</section>  
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
