import { error } from "../views/error";

export const errorController = (statusCode, msg) => {
  error(statusCode, msg);
};
