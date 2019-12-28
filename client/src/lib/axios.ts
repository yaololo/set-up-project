import axios from "axios";

const ajax = axios.create({
  timeout: 120000
});

export default ajax;
