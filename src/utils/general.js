export const getIdFromUrl = () => {
  //https://stackoverflow.com/questions/4758103/last-segment-of-url
  //make this reusable
  const id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  return id;
};

export const startStopSpinner = (action, selector, innerHtml) => {
  if (action === "start") {
    document.querySelector(selector).disabled = true;
    document.querySelector(selector).innerHTML = innerHtml;
  } else if (action === "stop") {
    document.querySelector(selector).innerHTML = innerHtml;
    document.querySelector(selector).disabled = false;
  }
};

export const hideDeleteBtn = () => {
  document.querySelector(`.hide-element-on-success`).innerHTML = ``;
};
