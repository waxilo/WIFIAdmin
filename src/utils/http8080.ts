import axios from "axios";

const httpParams = {
  baseURL: "/8080", // 使用代理路径
  timeout: 3000,
};

const http8080 = axios.create(httpParams);

export default http8080;
