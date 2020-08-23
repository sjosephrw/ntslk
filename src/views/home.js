export const slides = () => {
  //style="background-image: url('https://res.cloudinary.com/djsyg3fii/image/upload/v1596093296/NeoTech/joe-stubbs-ZXrirae0HRo-unsplash_umtohe.jpg');"
  // style="background-image: url('https://res.cloudinary.com/djsyg3fii/image/upload/v1596694790/2_a05pbr.jpg');"
  //    <!-- The video -->
  /* <video autoplay muted playsinline loop id="myVideo">
<source src="https://res.cloudinary.com/djsyg3fii/video/upload/v1593766310/samples/sea-turtle.mp4" type="video/mp4">
</video> */

  //https://stackoverflow.com/questions/27850472/html5-video-background-keep-center-of-video-in-center
  const markup = `
  <section class="section-slideshow">

  <a href="#" class="slide-navigation move-left"><i class="fas fa-chevron-left"></i></a>
  <div class="slides" style="background-image: url('https://res.cloudinary.com/djsyg3fii/image/upload/v1596093296/NeoTech/joe-stubbs-ZXrirae0HRo-unsplash_umtohe.jpg');"
  >
  <div class="linear-gradient">
  <div class="hero-text-slide">
    <h2>Accessibility Solutions</h2>
    <p>Installation / Maintenance etc. </p>
          
  </div>
  </div>
</div>   

<div class="slides" style="background-image: url('https://res.cloudinary.com/djsyg3fii/image/upload/v1596694790/2_a05pbr.jpg');">
<div class="linear-gradient">
<div class="hero-text-slide">
  <h2>Neo Tec</h2>
  <p>Escalators / Elevators etc. </p>
</div>
</div>
</div> 

<a href="#" class="slide-navigation move-right"><i class="fas fa-chevron-right"></i></a>         
</section>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};

export const welcome = () => {
  const markup = `
  <section class="section-welcome section-padding text-center">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding">
        <h3>WELCOME</h3>
        <img src="logo.png" alt="LOGO" style="margin-bottom: 40px; width: 40%; height: auto;">
        <p>
        NeoTec solutions is an accessibility solutions company that provides a wide variety of Elevators, Escalators and Parking System solutions to individuals and businesses.    
       </p> 
        </div>
    </div>

  </div>
</section>  
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};

export const features = () => {
  const markup = `<section class="section-features section-padding">
  <div class="container" style="margin-bottom: 35px;">
    <div class="row">
        <div class="col-3 col-padding">
          <div class="box-effects">
            <h3><i class="fas fa-sort-amount-up-alt"></i></h3>
            <p>
              You can leave your complex accessibility requirements to us and our dedicated and experienced team. 
            </p>         
          </div>
        </div>  
        <div class="col-3 col-padding">
          <div class="box-effects">
            <h3><i class="fas fa-sort-numeric-up-alt"></i></h3>
            <p>We go above and beyond to meet our clients' expectations by providing accessibility tools for them to run their businesses more efficiently.
            </p>         
          </div>        
        </div>
        <div class="col-3 col-padding">
          <div class="box-effects">
            <h3><i class="far fa-thumbs-up"></i></h3>
            <p>
              We use our experience to help you get the most out of your products with complete satisfaction.
            </p>          
          </div>

      </div>
    </div>
  </div>
  </section>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};

export const phrase = () => {
  const markup = `
  <section class="section-phrase section-padding text-center">
  <h2><i class="fab fa-themeco"></i></h2>
  <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
  </section>  
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
