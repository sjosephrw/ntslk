export const listCategories = (categories) => {
  const markup = `<section class="section-title section-padding">
    <div class="container">
      <div class="row">
        <div class="col-1 col-padding text-center">
          <h2>MANAGE CATEGORIES</h2>            
        </div>
      </div>
    </div>
  </section>
  <section class="section-orders section-padding section-full-height">
    <div class="container flex">
      <div class="col-1 col-padding">

        <a class="btn btn-primary full-width" href="/cms?category=categories&action=add" style="margin-bottom: 25px;">
          <i class="fas fa-plus"></i>
        </a>

        <ul class="manage-list">
          ${categories}
        </ul>
      </div>
    </div>
  </section>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};

const listItem = (_id, name) => {
  const markup = `  <li><a style="width: 80%; float: left;display: inline-block;" href="/cms?category=categories&action=edit&id=${_id}">CATEGORY: ${name}</a>
  <a style="width: 10%;float: left;display: inline-block;" href="/cms?category=categories&action=edit&id=${_id}"><i class="fas fa-edit"></i></a>
  <a style="width: 10%;float: left;display: inline-block;" href="/cms?category=categories&action=delete&id=${_id}"><i class="fas fa-trash"></i></a>
  <div class="clearfix"></div>
  </li>
  `;
  return markup;
};

export const generateListItemsCategories = (items) => {
  console.log(items);

  let _ids = items.map((el) => {
    return el._id;
  });

  let names = items.map((el) => {
    return el.name;
  });

  const itemString = [];

  for (let x = 0; x < _ids.length; x++) {
    itemString.push(listItem(_ids[x], names[x]));
  }

  let string = "";
  string = itemString.toString();
  string = string.replace(/,/g, "");
  return string;
};
