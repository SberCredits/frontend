import axios from "axios";

const instance = axios.create({
  baseURL: "http://application.darklorian.ru/api/v1/",
});

export default instance;
