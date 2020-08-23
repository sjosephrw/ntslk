export const getJwt = () => {
  let jwt = localStorage.getItem("jwtToken");

  if (jwt === null || jwt === undefined) {
    localStorage.setItem("jwtToken", "");
    jwt = localStorage.getItem("jwtToken");
  } else {
    jwt = localStorage.getItem("jwtToken");
  }

  return jwt;
};

export const setJwt = jwt => {
  localStorage.setItem("jwtToken", jwt);
  //console.log(`JWT UTILS - SET`, jwt);
  return jwt;
};

export const clearJwt = () => {
  localStorage.setItem("jwtToken", "");
};
