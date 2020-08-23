import { getIdFromUrl } from "../utils/general";
import { getUser } from "../utils/user";

export const products = (products) => {
  const categoryId = getIdFromUrl();

  const user = getUser();

  let addProductBtn = ``;

  if (user.user !== null && user.user.role !== "user") {
    addProductBtn = `<div class="row">
      <div class="col-1 col-padding">
        <a href="/cms?category=products&action=add&categoryId=${categoryId}" class="btn btn-primary full-width"><i class="fas fa-plus"></i></a>  
      </div>
    </div>`;
  }

  const markup = `<section class="section-title section-padding text-center">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding" style="margin: 5px 0;">
        <h3>PRODUCTS</h3>
      </div>
    </div>
  </div>
</section>
<section class="section-products">
${addProductBtn}
  <div class="container" style="margin-bottom: 35px;">
    <div class="row">
      ${products}
    </div>
  </div>
</section>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};

const trimName = (title, limit = 15) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);

    // return the result
    return `${newTitle.join(" ")} ...`;
  }
  return title;
};

const product = (_id, name, image) => {
  const markup = `<div class="col-3 col-padding">
  <div class="card">
      <div class="card-product">
          <div class="header-product">
              <div class="card-product-img">
                  <img src="${image}" alt="Product"/>
              </div>
          </div>
          <div class="body-product">
           ${trimName(name)}
          </div>
          <div class="footer-product">
              <a href="/product/${_id}" class="btn btn-primary full-width" style="border-radius: 0px !important;">
                  VIEW
              </a>
          </div>
      </div>
  </div>
  </div>`;
  return markup;
};

export const generateProducts = (products) => {
  if (products.length === 0) {
    return `<section class="section-products section-padding text-center section-full-height">
    <div class="container">
      <div class="row">
        <div class="col-1 col-padding">
          No products to display.
        </div>
      </div>
    </div>
  </section>`;
  }

  let ids = products.map((el) => {
    return el._id;
  });

  let names = products.map((el) => {
    return el.name;
  });

  let images = products.map((el) => {
    return el.image;
  });

  const productString = [];

  let y = 1;

  for (let x = 0; x < names.length; x++) {
    productString.push(product(ids[x], names[x], images[x]));

    if (y > 1 && y % 3 === 0)
      productString.push(
        `</div></div><div class="container" style="margin-bottom: 35px;"><div class="row">`
      );

    y++;
  }

  let string = "";
  string = productString.toString();
  string = string.replace(/,/g, "");
  return string;
};

export const details = (data) => {
  const { _id, name, image, description, features } = data;

  const user = getUser();

  let editDeleteProductBtn = ``;

  if (user.user !== null && user.user.role !== "user") {
    editDeleteProductBtn = `<li><a href="/cms?category=products&action=edit&id=${_id}" class="btn btn-primary full-width"><i class="far fa-edit"></i>&nbsp;&nbsp;EDIT</a></li>
        <li><a href="/cms?category=products&action=delete&id=${_id}" class="btn btn-danger full-width"><i class="fas fa-trash"></i>&nbsp;&nbsp;DELETE</a></li>`;
  }

  const markup = `
  <section class="section-details section-padding">
  <div class="container">
    <div class="row">
      <div class="col-1 details-desc-product text-center">
          <h4>DESCRIPTION</h4>
          <p>
            ${description} 
         </p>
      </div>
    </div>

    <div class="row">
      <div class="col-2">
          <div class="detail-img-product">
              <img src="${image}" alt="Product"/>
          </div>
      </div>
      <div class="col-2 col-padding">
          <div class="detail-info-product">
              <h2>
                  ${name}
              </h2>
          </div>
          <hr style="margin-top: 20px;">
          <div class="detail-info-product" style="margin-top: 20px;">
              <p>PRODUCT ID: ${_id}</p>
          </div>

          <div class="detail-info-product">
              <h4>FEATURES</h4>
              <p>
                ${features}
              </p>
          </div>

          <div class="detail-info-product">

              <ul class="detail-buttons">
              ${editDeleteProductBtn} 
              </ul>
          </div>
      </div>
    </div>

  </div>
</section> 
<section class="section-inquiry section-padding text-center" style="position: relative;">
  <div class="col-1" style="position: fixed; bottom: 20%;right: 5%;z-index: 1;">
    <div class="box-enquiry">
      <a href="/contact?id=${_id}" class="btn btn-primary enquiry" style="margin: 30px 0;border-radius: 50px;padding: 7px 20px;">PRODUCT ENQUIRY&nbsp;&nbsp;<i class="fas fa-phone-volume"></i></a>
    </div>
  </div>
</section> 
  `;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
