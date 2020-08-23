import message from "../../utils/message";
import { startStopSpinner } from "../../utils/general";

export const addCategoryCtrl = (objInstance) => {
  const action = document.getElementById("action");

  action.addEventListener("click", async (e) => {
    e.preventDefault();

    startStopSpinner(
      "start",
      "#action",
      `<i class="fas fa-spinner fa-spin"></i>`
    );

    //https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata

    const name = document.querySelector("#name").value;

    const data = {
      name
    };

    await objInstance.add(data);

    if (objInstance.res.status === 201) {
      message("success", "Success: Item created");
      document.querySelector(".form-manage-item").reset();
    } else {
      message("fail", objInstance.res.msg);
    }

    startStopSpinner(
      "stop",
      "#action",
      `<i class="fas fa-plus"></i>&nbsp;&nbsp;ADD ITEM`
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

export const editCategoryCtrl = (objInstance, id) => {
  const action = document.getElementById("action");

  action.addEventListener("click", async (e) => {
    e.preventDefault();

    startStopSpinner(
      "start",
      "#action",
      `<i class="fas fa-spinner fa-spin"></i>`
    );

    //https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata

    const name = document.querySelector("#name").value;

    const data = {
      name
    };

    await objInstance.edit(data, id);

    if (objInstance.res.status === 200) {
      message("success", "Success: Item edited");
    } else {
      message("fail", objInstance.res.msg);
    }

    startStopSpinner(
      "stop",
      "#action",
      `<i class="<i class="fas fa-edit"></i>&nbsp;&nbsp;EDIT MENU`
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
