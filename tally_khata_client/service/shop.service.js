import axios from "axios";

const shopService = {
    getAllShopsOfOwner(success, error, params) {
        axios
            .get('/get-shops-of-owner',{params:params})
            .then((responseData) => {
                success(responseData.data);
            })
            .catch((errorResponse) => error(errorResponse));
    },
    addShopForOwner(success, error, data) {
        axios
            .post('/add-shop-for-owner',data)
            .then((responseData) => {
                success(responseData.data);
            })
            .catch((errorResponse) => error(errorResponse));
    },
    getShopInfo(success, error, data) {
        axios
            .post('/get-shop-details',data)
            .then((responseData) => {
                success(responseData.data);
            })
            .catch((errorResponse) => error(errorResponse));
    },
    addDebtForShop(success, error, data) {
        axios
            .post('/save-debt-for-customer',data)
            .then((responseData) => {
                success(responseData.data);
            })
            .catch((errorResponse) => error(errorResponse));
    },
};

export default shopService;
