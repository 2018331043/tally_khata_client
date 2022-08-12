/* eslint-disable prettier/prettier */
import axios from "axios";

import localStorageService from "./localStorage.service";
const config = {
    headers: { Authorization: `Bearer ${localStorageService.getToken()}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type":"application/json",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
        withCredentials: true
    }
};

const authService = {
    login: function (data) {
        return axios.post('/signin', data);
    },
    logout: function () {
        return axios.post(URL.auth.signout);
    },
    signUp(success, error,data) {
        console.log(data);
        axios
            .post('http://localhost:8000/signup',data)
            .then((responseData) => {
                success(responseData.data);
            })
            .catch((errorResponse) => error(errorResponse));
    },
};
export default authService;