import message from "../../utils/message";
import { startStopSpinner, hideDeleteBtn } from "../../utils/general";

export const deleteCtrl = (model, id) => {
  const action = document.getElementById("action");

  action.addEventListener("click", async (e) => {
    e.preventDefault();

    startStopSpinner(
      "start",
      "#action",
      `<i class="fas fa-spinner fa-spin"></i>`
    );
    //https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata

    await model.delete(id);

    if (model.res.status === 204) {
      message("success", "Success: Item deleted");
      hideDeleteBtn();
    } else {
      message("fail", model.res.msg);
      startStopSpinner(
        "stop",
        "#action",
        `<i class="fas fa-trash"></i>&nbsp;&nbsp;DELETE ITEM`
      );
    }

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
  });
};
