import axios from "axios";

const instance = axios.create({
  baseURL: "http://authentication.darklorian.ru/api/v1/",
});

export default instance;
