export const getUser = () => {
  let user = localStorage.getItem("user");

  if (user === null || user === undefined) {
    localStorage.setItem("user", JSON.stringify({ user: null }));
    user = localStorage.getItem("user");
  }

  user = JSON.parse(user);
  return user;
};

export const setUser = user => {
  localStorage.setItem("user", JSON.stringify({ user: user }));
  //console.log(`user UTILS - SET`, user);
  return user;
};

export const clearUser = () => {
  localStorage.setItem("user", "{}");
};
