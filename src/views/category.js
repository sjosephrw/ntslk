export const categoryMenu = markup => {
  document.querySelector(".menu-products").innerHTML = markup;
};

const category = (_id, name) => {
  const markup = `<li><a href="/category/${_id}">${name}</a></li>`;
  return markup;
};

export const generateCategories = categories => {
  console.log(categories);

  let ids = categories.map(el => {
    return el._id;
  });

  let names = categories.map(el => {
    return el.name;
  });

  const categoryString = [];

  for (let x = 0; x < ids.length; x++) {
    categoryString.push(category(ids[x], names[x]));
  }

  let string = "";
  string = categoryString.toString();
  string = string.replace(/,/g, "");
  return string;
};
