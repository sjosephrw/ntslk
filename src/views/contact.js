export const contact = (id = null) => {
  let subject = ``;

  if (id !== null) {
    subject = `Product enquiry - https://${window.location.hostname}/product/${id}`;
  }
  const markup = `
  <section class="section-title section-padding text-center">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding" style="margin: 5px 0;">
        <h3>CONTACT US</h3>
      </div>
    </div>
  </div>
</section>

<section class="section-contact-form">
  <div class="container">
    <div class="row">

      <div class="col-2 col-padding">

        <ul class="contact">
          <li class="bg-color">TEL: +94117061899</li>
          <li>HOTLINE: +94765558787</li>
          <li class="bg-color">FAX: +94114544893</li>
          <li>EMAIL: info@ntslk.com</li>
          <li class="bg-color">ADDRESS: #396/32 , School Lane, Kalalgoda, Pannipitiya</li>
        </ul>

      </div>

      <div class="col-2 col-padding" style="margin-bottom: 35px;">
        <form class="form-contact">
          <input type="text" name="name" id="name" value="" placeholder="Name">
          <input type="text" name="email" id="email" value="" placeholder="Email">
          <input type="text" name="phone" id="phone" value="" placeholder="Phone">
          <input type="text" name="subject" id="subject" value="${subject}" placeholder="Subject">
          <textarea id="msg" placeholder="Message"></textarea>
          <button type="submit" class="btn btn-primary full-width" style="margin-top: 120px !important;" id="btn-contact">SUBMIT</button>
        </form>


      </div>

    </div>
  </div>
</section> 
<section class="section-map section-padding">
<div class="container">
  <div class="row">
    <div class="col-1 col-padding map">
<iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=100%&amp;height=250&amp;hl=en&amp;q=School%20Lane,%20Pannipitiya,%2010230%20Colombo+(Neotec%20Solutions%20(Pvt)%20Ltd)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=9ff9b9303e21947ef5ebc81896448d3bce6c1d1e'></script>
    </div>
  </div>
</div>
</section>
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
