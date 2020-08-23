const msgMarkup = (msg) => {
  return `<div class="msg-header">
          <i class="fas fa-times"></i>
          </div>
          <div class="msg-body">${msg}</div>
          `;
};

const message = (type, msgText) => {
  const msg = document.querySelector(".msg");

  if (type === "success") {
    //success

    msg.innerHTML = ``;
    msg.classList.remove("msg-fail");
    msg.classList.add("msg-success");
    //msg.textContent = objInstance.res.msg;
    msg.insertAdjacentHTML("beforeend", msgMarkup(msgText));
  } else {
    //fail
    //clear the error msg, other wise if there is a second error then that will get appended to the error msg
    msg.innerHTML = ``;

    msg.classList.remove("msg-success");
    msg.classList.add("msg-fail");
    //msg.textContent = objInstance.res.msg;
    msg.insertAdjacentHTML("beforeend", msgMarkup(msgText));
  }
};

export default message;
