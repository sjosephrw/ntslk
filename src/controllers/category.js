import { errRedirect } from "../utils/redirect";

import { categoryMenu, generateCategories } from "../views/category";

export const categoryController = async (objInstance) => {
  await objInstance.getCategories();

  if (objInstance.res.status !== 200) {
    errRedirect(502, `Sorry! something went worng.`);
  }

  categoryMenu(generateCategories(objInstance.res.data));
};
