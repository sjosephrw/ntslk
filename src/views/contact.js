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
          <li class="bg-color">TEL: +94 11 427 5598</li>
          <li>HOTLINE: +94 779400678</li>
          <li class="bg-color">FAX: +94 114544893</li>
          <li>EMAIL: info@ntslk.com</li>
          <li class="bg-color">ADDRESS: #396/32 , Kalalgoba, School Lane, Pannipitiya</li>
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
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.248228450554!2d79.9335160139337!3d6.860825695041982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2508964ba4511%3A0x77742843bfb460e4!2sSchool%20Lane%2C%20Pannipitiya%2010230!5e0!3m2!1sen!2slk!4v1597927292461!5m2!1sen!2slk" width="100%" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
</div>
</section>
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
