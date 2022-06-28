const USER_INFO = "userInfo";
const TOKEN = "token";
import apiService from "./api.service";
const localStorageService = {
    setToken(token) {
        localStorage.setItem(TOKEN, token);
        apiService.setToken()
    },
    getToken() {
        return localStorage.getItem(TOKEN);
    },
    setUserInfo(userInfo) {
        localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
    },
    getUserInfo() {
        return JSON.parse(localStorage.getItem(USER_INFO));
    },
};

export default localStorageService;