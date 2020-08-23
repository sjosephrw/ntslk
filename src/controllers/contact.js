import { contact } from "../views/contact";

export const contactController = (query, objInstance) => {
  if (query) {
    const id = query.split("=")[1];
    contact(id);
  } else {
    contact();
  }

  document.querySelector(".msg").addEventListener("click", (event) => {
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

  document
    .querySelector(".form-contact")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      document.getElementById("btn-contact").disabled = true;

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("phone").value;
      const subject = document.getElementById("subject").value;
      const msg = document.getElementById("msg").value;

      const data = {
        name,
        email,
        password,
        subject,
        msg
      };

      await objInstance.sendMsg(data);

      const statusCode = objInstance.res.status;
      const message = objInstance.res.msg;

      if (statusCode === 200) {
        //sendMsg success
        const msg = document.querySelector(".msg");
        msg.innerHTML = ``;
        msg.classList.remove("msg-fail");
        msg.classList.add("msg-success");
        //msg.textContent = objInstance.res.msg;
        msg.insertAdjacentHTML("beforeend", msgMarkup(message));
        document.querySelector(".form-contact").reset();
        document.getElementById("btn-contact").disabled = false;
      } else {
        //sendMsg fail
        const msg = document.querySelector(".msg");

        //clear the error msg, other wise if there is a second error then that will get appended to the error msg
        msg.innerHTML = ``;

        msg.classList.remove("msg-success");
        msg.classList.add("msg-fail");
        //msg.textContent = objInstance.res.msg;
        msg.insertAdjacentHTML("beforeend", msgMarkup(message));
        document.getElementById("btn-contact").disabled = false;
      }
    });
};

const msgMarkup = (msg) => {
  return `<div class="msg-header">
          <i class="fas fa-times"></i>
          </div>
          <div class="msg-body">${msg}</div>
          `;
};
