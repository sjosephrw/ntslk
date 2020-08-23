//views
import {
  listCategories,
  generateListItemsCategories
} from "../views/cms/categories";

import { addCategory } from "../views/cms/addCategory";
import { editCategory } from "../views/cms/editCategory";
import { addProduct } from "../views/cms/addProduct";
import { editProduct } from "../views/cms/editProduct";

import { addProject, editProject } from "../views/cms/projects";

import { deleteItem } from "../views/cms/delete";

//sub ctrls
import { addCategoryCtrl, editCategoryCtrl } from "./subControllers/category";
import { addProductCtrl, editProductCtrl } from "./subControllers/product";
import { addProjectCtrl, editProjectCtrl } from "./subControllers/project";
import { deleteCtrl } from "./subControllers/delete";
// import { editMenu } from "./editMenu";
// import { deleteMenu } from "./deleteMenu";

// import { addProduct } from "./addProduct";
// import { editProduct } from "./editProduct";
// import { deleteProduct } from "./deleteProduct";

const main = async (query, data) => {
  const segmentsArr = query.split("&");

  if (segmentsArr.length === 1) {
    if (segmentsArr[0] === "category=categories") {
      await data.categories.getCategories();
      listCategories(generateListItemsCategories(data.categories.res.data));
    }
  } else if (segmentsArr.length === 2) {
    if (segmentsArr[0] === "category=categories") {
      if (segmentsArr[1] === "action=add") {
        addCategory();
        addCategoryCtrl(data.categories);
      }
    } else if (segmentsArr[0] === "category=projects") {
      if (segmentsArr[1] === "action=add") {
        addProject();
        addProjectCtrl(data.projects);
      }
    }
  } else if (segmentsArr.length === 3) {
    if (segmentsArr[0] === "category=categories") {
      if (segmentsArr[1] === "action=edit") {
        const id = segmentsArr[2].split("=")[1];

        await data.categories.getCategory(id);
        const dataCategory = data.categories.res.data;

        editCategory(dataCategory);
        editCategoryCtrl(data.categories, id);
      } else if (segmentsArr[1] === "action=delete") {
        const id = segmentsArr[2].split("=")[1];
        deleteItem();
        deleteCtrl(data.categories, id);
      }
    } else if (segmentsArr[0] === "category=projects") {
      if (segmentsArr[1] === "action=edit") {
        const id = segmentsArr[2].split("=")[1];

        await data.projects.getProject(id);
        const dataItem = data.projects.res.data;

        editProject(dataItem);
        editProjectCtrl(data.projects, id);
      } else if (segmentsArr[1] === "action=delete") {
        const id = segmentsArr[2].split("=")[1];
        deleteItem();
        deleteCtrl(data.projects, id);
      }
    } else if (segmentsArr[0] === "category=products") {
      if (segmentsArr[1] === "action=add") {
        const id = segmentsArr[2].split("=")[1];
        console.log(id);
        addProduct();
        addProductCtrl(data.products, id);
      } else if (segmentsArr[1] === "action=edit") {
        const id = segmentsArr[2].split("=")[1];
        // console.log(productId);

        await data.products.getProduct(id);
        const dataItem = data.products.res.data;

        editProduct(dataItem);
        editProductCtrl(data.products, id);
      } else if (segmentsArr[1] === "action=delete") {
        const id = segmentsArr[2].split("=")[1];
        deleteItem();
        deleteCtrl(data.products, id);
      }
    }
  }
  // if (segmentsArr.length === 1) {
  //   if (segmentsArr[0] === "category=slides") {
  //     listSlides(generateListItems(data.slides.res));
  //   } else if (segmentsArr[0] === "category=menus") {
  //     listMenus(generateListItemsMenus(data.menus.res));
  //   }
  // } else if (segmentsArr.length === 2) {
  //   if (segmentsArr[0] === "category=slides") {
  //     if (segmentsArr[1] === "action=add") {
  //       addSlide(data.slides);
  //     }
  //   } else if (segmentsArr[0] === "category=menus") {
  //     if (segmentsArr[1] === "action=add") {
  //       addMenu(data.menus);
  //     }
  //   }
  // } else if (segmentsArr.length === 3) {
  //   if (segmentsArr[0] === "category=slides") {
  //     if (segmentsArr[1] === "action=edit") {
  //       const id = segmentsArr[2].split("=")[1];
  //       console.log(id);

  //       editSlide(data.slides, id);
  //     } else if (segmentsArr[1] === "action=delete") {
  //       const id = segmentsArr[2].split("=")[1];
  //       console.log(id);

  //       deleteSlide(data.slides, id);
  //     }
  //   } else if (segmentsArr[0] === "category=menus") {
  //     if (segmentsArr[1] === "action=edit") {
  //       const id = segmentsArr[2].split("=")[1];
  //       console.log(id);
  //       editMenu(data.menus, id);
  //     } else if (segmentsArr[1] === "action=delete") {
  //       const id = segmentsArr[2].split("=")[1];
  //       console.log(id);
  //       deleteMenu(data.menus, id);
  //     }
  //   } else if (segmentsArr[0] === "category=products") {
  //     if (segmentsArr[1] === "action=add") {
  //       const menuId = segmentsArr[2].split("=")[1];
  //       console.log(menuId, "MI");
  //       addProduct(data.products, menuId);
  //     } else if (segmentsArr[1] === "action=edit") {
  //       const productId = segmentsArr[2].split("=")[1];
  //       console.log(productId);
  //       editProduct(data.products, productId);
  //     } else if (segmentsArr[1] === "action=delete") {
  //       const productId = segmentsArr[2].split("=")[1];
  //       console.log(productId);
  //       deleteProduct(data.products, productId);
  //     }
  //   }
  // }
};

export const cmsController = (query, data) => {
  main(query, data);
};
