import axios from "axios";

let AxiosInstance = axios.create({
  baseURL: "https://technocrom.com/backend/api/",
  timeout: 10000,
});

AxiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = JSON.parse(window.sessionStorage.getItem("sessionData"));
  if (token !== null) {
    token = token.token.split("|").pop();
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

export default AxiosInstance;
