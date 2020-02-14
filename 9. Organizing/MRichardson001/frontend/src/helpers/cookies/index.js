import Cookies from "universal-cookie";

let cookies = null;

export const getCookieHandler = req => {
  if (cookies && !req) {
    return cookies;
  }
  cookies = !!req ? new Cookies(req.headers.cookie) : new Cookies();
  return cookies;
};

export const setItem = (key, item) => {
  const cook = getCookieHandler();
  cook.set(key, JSON.stringify(item), { path: "/" });
  // store data so that we can automatically renew the token
  if (key === "user") {
    cook.set("token_date", new Date().getTime(), {
      path: "/"
    });
  }
};

export const getItem = key => {
  const cook = getCookieHandler();
  let item = cook.get(key);
  if (!!item && !item.token) {
    try {
      item = JSON.parse(item);
    } catch (e) {
      console.log(e);
    }
  }
  return !!item ? item : undefined;
};

export const getItemString = key => {
  const cook = getCookieHandler();
  let item = cook.get(key);
  return !!item ? item : undefined;
};

export const clear = () => {
  const cook = getCookieHandler();
  cook.remove("user", { path: "/" });
};
