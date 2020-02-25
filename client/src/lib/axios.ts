import axios, { AxiosError, AxiosResponse } from "axios";
import { ICustomizedError } from "interface/axios";

const ajax = axios.create({
  baseURL: "/api",
  timeout: 60000
});

const responseInterceptor = (res: AxiosResponse) => {
  // Do something before return res
  return res;
};

const errInterceptor = (e: any): Promise<ICustomizedError> => {
  let errMsg = "";
  let statusCode: number | undefined = undefined;

  if (e.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    errMsg = e.response.data.message;
    statusCode = e.response.status;
  } else if (e.request) {
    // The request was made but no response was received
    // `e.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    errMsg = "No response from server.";
  } else {
    // Something happened in setting up the request that triggered an e
    errMsg = e.message;
  }
  return Promise.reject({ code: statusCode, message: errMsg });
};

ajax.interceptors.response.use(responseInterceptor, errInterceptor);

export { ajax };
