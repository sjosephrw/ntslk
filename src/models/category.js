import axios from "axios";
import config from "../config";

import { getJwt } from "../utils/jwt";

//https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime
//https://github.com/babel/babel/issues/9849

const baseUrlAPI = config.baseUrlAPI;

export default class Category {
  constructor() {
    this.res = {};
  }

  async getCategories() {
    try {
      const res = await axios(`${config.baseUrlAPI}/api/v1/category`);
      //console.log(res.data.data.data[0].name);
      this.res.data = res.data.data.data;
      this.res.status = res.status;
    } catch (error) {
      console.log(error);
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

  async getCategory(id) {
    try {
      const res = await axios(`${config.baseUrlAPI}/api/v1/category/${id}`);
      console.log(res);

      this.res.data = res.data.data.data;
      this.res.status = res.status;
      console.log(res);
    } catch (error) {
      console.log(error);
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

  async add(fd) {
    try {
      const jwt = getJwt();

      console.log(jwt);

      const res = await axios({
        method: "POST",
        url: `${config.baseUrlAPI}/api/v1/category/`,
        data: {
          name: fd.name
        },
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });

      //console.log(res);

      this.res.status = res.status;
      console.log(this.res.status, "category model");
      //when creating an item the API does not return a message
      //this.res.msg = res.data.message;
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

  async edit(fd, id) {
    try {
      const jwt = getJwt();

      const config = {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      };

      const res = await axios.patch(
        `${baseUrlAPI}/api/v1/category/${id}`,
        { name: fd.name },
        config
      );

      //console.log(res);

      this.res.status = res.status;
      console.log(this.res.status, "TESTING");
      //when creating an item the API does not return a message
      //this.res.msg = res.data.message;
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

  async delete(Id) {
    try {
      const jwt = getJwt();

      const res = await axios.delete(`${baseUrlAPI}/api/v1/category/${Id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });

      console.log(res);
      //there is no res.data or res.message returned when deleting, only the res.status is returned
      this.res.status = res.status;
    } catch (error) {
      console.log(error);
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

      //}
      //alert("Something went wrong :(");
    }
  }
}
