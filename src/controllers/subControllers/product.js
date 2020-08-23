import message from "../../utils/message";
import { startStopSpinner } from "../../utils/general";

export const addProductCtrl = (model, id) => {
  const action = document.getElementById("action");

  action.addEventListener("click", async (e) => {
    e.preventDefault();

    startStopSpinner(
      "start",
      "#action",
      `<i class="fas fa-spinner fa-spin"></i>`
    );

    //https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata

    const obj = {
      name: document.querySelector("#name").value,
      category: id,
      description: document.querySelector("#description").value,
      features: document.querySelector("#features").value,
      link: document.querySelector("#link").value,
      collection: "product",
      image: document.querySelector("#image").files[0]
    };

    const fd = new FormData();

    fd.append("name", obj.name);
    fd.append("category", obj.category);
    fd.append("description", obj.description);
    fd.append("features", obj.features);
    fd.append("link", obj.link);
    fd.append("collection", obj.collection);
    fd.append("image", obj.image);

    await model.add(fd);

    if (model.res.status === 201) {
      message("success", "Success: Item created");
      document.querySelector(".form-manage-item").reset();
    } else {
      message("fail", model.res.msg);
    }

    startStopSpinner(
      "stop",
      "#action",
      `<i class="fas fa-plus"></i>&nbsp;&nbsp;ADD PRODUCT`
    );
  });

  //https://stackoverflow.com/questions/25387396/addeventlistener-to-not-exists-object-with-only-javascript
  //close the msg div if the 'x' icon is clicked
  document.querySelector(".msg").addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-times")) {
      if (document.querySelector(".msg").classList.contains("msg-fail")) {
        document.querySelector(".msg").classList.remove("msg-fail");
      } else if (
        document.querySelector(".msg").classList.contains("msg-success")
      ) {
        document.querySelector(".msg").classList.remove("msg-success");
      }

      document.querySelector(".msg").innerHTML = ``;
    }
  });
};

export const editProductCtrl = (model, id) => {
  const action = document.getElementById("action");

  action.addEventListener("click", async (e) => {
    e.preventDefault();

    startStopSpinner(
      "start",
      "#action",
      `<i class="fas fa-spinner fa-spin"></i>`
    );

    //https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata

    const obj = {
      name: document.querySelector("#name").value,
      category: document.querySelector("#category").value,
      description: document.querySelector("#description").value,
      features: document.querySelector("#features").value,
      link: document.querySelector("#link").value,
      collection: "product"
    };

    if (document.querySelector("#image").files.length === 1) {
      obj.image = document.querySelector("#image").files[0];
    }

    const fd = new FormData();

    fd.append("name", obj.name);
    fd.append("category", obj.category);
    fd.append("description", obj.description);
    fd.append("features", obj.features);
    fd.append("link", obj.link);
    fd.append("collection", obj.collection);
    if ("image" in obj) fd.append("image", obj.image);

    await model.edit(fd, id);

    if (model.res.status === 200) {
      message("success", "Success: Item edited");
      document.querySelector(".form-manage-item").reset();
    } else {
      message("fail", model.res.msg);
    }

    startStopSpinner(
      "stop",
      "#action",
      `<i class="fas fa-plus"></i>&nbsp;&nbsp;ADD PRODUCT`
    );
  });

  //https://stackoverflow.com/questions/25387396/addeventlistener-to-not-exists-object-with-only-javascript
  //close the msg div if the 'x' icon is clicked
  document.querySelector(".msg").addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-times")) {
      if (document.querySelector(".msg").classList.contains("msg-fail")) {
        document.querySelector(".msg").classList.remove("msg-fail");
      } else if (
        document.querySelector(".msg").classList.contains("msg-success")
      ) {
        document.querySelector(".msg").classList.remove("msg-success");
      }

      document.querySelector(".msg").innerHTML = ``;
    }
  });
};
