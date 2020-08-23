export const services = () => {
  const markup = `
  <section class="section-hero-img">
  <div class="hero-text">
    <h1>SERVICES</h1>
    <p>About our services.</p>
  </div>
</section>
<section class="section-why-us section-padding section-background-color">
<div class="container">
  <div class="row">
    <div class="col-2 col-padding">
      <h3>WHY OUR SERVICES ?</h3>
      <p>
      We at NeoTec provide you with a complete set of accessibility solutions which would empower you and your business. We deliver innovative and scalable solutions to our clients with the latest in accessibility technology.</p>
    </div>
    <div class="col-2 col-padding" style="text-align: center;">
      <div class="img-frame">
        <img src="https://res.cloudinary.com/djsyg3fii/image/upload/v1596692795/1_t4acow.png" alt="Image">
      </div>
    </div>
  </div>
</div>
</section>
<section class="section-features section-padding" style="background-color: #13131326 !important;">
<div class="container resp-padding">
  <div class="row">
    <div class="col-3 col-padding">
      <h4>ESTABLISHMENT</h4>
      <p>
      NEOTEC SOLUTIONS is established in 2009, providing mobility solutions and Mechanical Designs.
      </p>
    </div>
    <div class="col-3 col-padding">
      <h4>TECHNICAL TRAINING</h4>
      <p>
      Our Technicians undergo thorough techinal training, and are at the forefront of advances in industry technology and methodology.
      </p>
    </div>
    <div class="col-3 col-padding">
      <h4>INDUSTRY LEADER</h4>
      <p>
      We are have become one of the leaders in the industry and represent world leading manufacturers.
      </p>
      </div>
  </div>
</div>
</section>  
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
