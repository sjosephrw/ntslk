export const redirect = page => {
  window.location.replace(page);
};

export const errRedirect = (statusCode, msg) => {
  window.location.replace(`/err/${statusCode}/${encodeURIComponent(msg)}`);
};
