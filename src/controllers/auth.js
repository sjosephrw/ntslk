//views
import { auth } from "../views/auth";

//utils
import { setJwt } from "../utils/jwt";
import { setUser } from "../utils/user";

export const authController = objInstance => {
  auth();

  document.querySelector(".msg").addEventListener("click", event => {
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
    .querySelector(".form-sign-in")
    .addEventListener("submit", async e => {
      e.preventDefault();

      document.getElementById("btn-sign-in").disabled = true;
      const email = document.getElementById("email-sign-in").value;
      const password = document.getElementById("password-sign-in").value;

      await objInstance.signIn(email, password);

      const statusCode = objInstance.res.status;
      const message = objInstance.res.msg;

      if (statusCode === 200) {
        //login success

        const token = objInstance.data.token;
        const user = objInstance.data.data.user;

        //console.log(token, user);
        setJwt(token);
        setUser(user);

        const msg = document.querySelector(".msg");
        msg.innerHTML = ``;
        msg.classList.remove("msg-fail");
        msg.classList.add("msg-success");
        //msg.textContent = objInstance.res.msg;
        msg.insertAdjacentHTML("beforeend", msgMarkup(message));

        document.querySelector(".form-sign-in").reset();

        setTimeout(function() {
          window.location.reload();
        }, 3000);
      } else {
        //login fail
        const msg = document.querySelector(".msg");

        //clear the error msg, other wise if there is a second error then that will get appended to the error msg
        msg.innerHTML = ``;

        msg.classList.remove("msg-success");
        msg.classList.add("msg-fail");
        //msg.textContent = objInstance.res.msg;
        msg.insertAdjacentHTML("beforeend", msgMarkup(message));
        document.getElementById("btn-sign-in").disabled = false;
      }
    });

  document
    .querySelector(".form-sign-up")
    .addEventListener("submit", async e => {
      e.preventDefault();
      document.getElementById("btn-sign-up").disabled = true;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const passwordConfirm = document.getElementById("passwordConfirm").value;

      await objInstance.signUp(email, password, passwordConfirm);

      const statusCode = objInstance.res.status;
      const message = objInstance.res.msg;

      if (statusCode === 201) {
        //register success
        const msg = document.querySelector(".msg");
        msg.innerHTML = ``;
        msg.classList.remove("msg-fail");
        msg.classList.add("msg-success");
        //msg.textContent = objInstance.res.msg;
        msg.insertAdjacentHTML("beforeend", msgMarkup(message));
        document.querySelector(".form-sign-up").reset();
        document.getElementById("btn-sign-up").disabled = false;
      } else {
        //register fail
        const msg = document.querySelector(".msg");

        //clear the error msg, other wise if there is a second error then that will get appended to the error msg
        msg.innerHTML = ``;

        msg.classList.remove("msg-success");
        msg.classList.add("msg-fail");
        //msg.textContent = objInstance.res.msg;
        msg.insertAdjacentHTML("beforeend", msgMarkup(message));
        document.getElementById("btn-sign-up").disabled = false;
      }
    });
};

const msgMarkup = msg => {
  return `<div class="msg-header">
          <i class="fas fa-times"></i>
          </div>
          <div class="msg-body">${msg}</div>
          `;
};
