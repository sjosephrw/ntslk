import axios from "axios";
import config from "../config";

//utils
import { getJwt } from "../utils/jwt";

// import { proxy } from "../../config";
//https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime
//https://github.com/babel/babel/issues/9849

export default class User {
  constructor() {
    this.isLoggedIn = false;
    this.isUserLoggedIn();
    this.data = {};
    this.res = {};
  }

  async signIn(email, password) {
    try {
      const res = await axios({
        method: "POST",
        url: `${config.baseUrlAPI}/api/v1/auth/signin`,
        data: {
          email,
          password
        }
      });
      //console.log(res.data.data.data[0].name);
      console.log(res);
      console.log("LU", res.data.data.user);
      console.log("RES DATA >", res.data);
      //this.user = res.data.data.user;
      //this.res = res.data;
      this.res.status = res.status;
      this.res.msg = res.data.message;
      this.data = res.data;
    } catch (error) {
      console.log(error);
      //alert("Something went wrong :(");
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("XXXX", error.response.data.message);
        console.log("YYYY", error.response.data);
        console.log(error.response.status);
        console.log("EH", error.response.headers);
        console.log("Error", error.message);

        //throw new Error(error.response.data.message);
        // this.res.err = true;
        this.res.status = error.response.status;
        this.res.msg = error.response.data.message;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }

  async signUp(email, password, passwordConfirm) {
    try {
      const res = await axios({
        method: "POST",
        url: `${config.baseUrlAPI}/api/v1/auth/signup`,
        data: {
          email,
          password,
          passwordConfirm: passwordConfirm
        }
      });

      console.log(res);

      this.res.status = res.status;
      this.res.msg = res.data.message;
    } catch (error) {
      console.log(error);
      //alert("Something went wrong :(");
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("XXXX", error.response.data.message);
        console.log("YYYY", error.response.data);
        console.log(error.response.status);
        console.log("EH", error.response.headers);
        console.log("Error", error.message);

        this.res.status = error.response.status;
        this.res.msg = error.response.data.message;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }

  async isUserLoggedIn() {
    const jwt = getJwt();
    if (jwt !== "") {
      this.isLoggedIn = true;
    } //logged in
    else {
      this.isLoggedIn = false;
    }
  }

  async sendMsg(data) {
    try {
      const res = await axios({
        method: "POST",
        url: `${config.baseUrlAPI}/api/v1/email/contact`,
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          msg: data.msg
        }
      });

      console.log(res);

      this.res.status = res.status;
      this.res.msg = res.data.message;
    } catch (error) {
      console.log(error);
      //alert("Something went wrong :(");
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("XXXX", error.response.data.message);
        console.log("YYYY", error.response.data);
        console.log(error.response.status);
        console.log("EH", error.response.headers);
        console.log("Error", error.message);

        this.res.status = error.response.status;
        this.res.msg = error.response.data.message;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }
}
