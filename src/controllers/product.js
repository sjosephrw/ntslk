import { errRedirect } from "../utils/redirect";

import { products, generateProducts, details } from "../views/products";

export const productController = async (objInstance, id) => {
  await objInstance.getCategory(id);

  if (objInstance.res.status !== 200) {
    errRedirect(objInstance.res.status, objInstance.res.msg);
  }

  products(generateProducts(objInstance.res.data.products));
};

export const productDetailsController = async (objInstance, id) => {
  await objInstance.getProduct(id);

  if (objInstance.res.status !== 200) {
    errRedirect(objInstance.res.status, objInstance.res.msg);
  }

  details(objInstance.res.data);
};
