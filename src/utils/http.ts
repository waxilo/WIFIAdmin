import axios from "axios";

const httpParams = {
  baseURL: "/admin", // 使用代理路径
  timeout: 3000,
  withCredentials: true,
};

const http = axios.create(httpParams);

const loginInfo = { lastLoginDate: null as Date | null };

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    if (needLogin()) {
      login();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function needLogin(): boolean {
  const now = new Date();
  const lastDate = loginInfo.lastLoginDate;
  loginInfo.lastLoginDate = now;
  return (
    lastDate === null || now.getTime() - lastDate.getTime() >= 5 * 60 * 1000
  );
}

async function login() {
  const response = await axios.create(httpParams).post("/goform/login", {
    username: "4cc68e3626e5b94602c325f7c4ca5dee",
    password: "4cc68e3626e5b94602c325f7c4ca5dee",
    remember: "d2e6057958b411672c3028b1976a41e1",
  });
  console.log("login request code: ", response.status);
}

export default http;
