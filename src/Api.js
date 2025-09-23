import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/user/getUser`)
        return response;
    } catch (err) {
        return err;
    }
}

export const createUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/create`, data);
        return response;

    } catch (err) {
        return err;

    }
}

export const verifyOTP = async (phoneNumber, OTP) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/verifyOTP`, null, {
            params: {
                phoneNumber: phoneNumber,
                OTP: OTP
            }
        })
        return response;

    } catch (err) {
        return err;

    }
}
export const logoutUser = async (phoneNumber) => {

    try {
        const response = await axios.delete(`${BASE_URL}/api/user/delete`, {
            params: { phoneNumber }
        });

        return response;
    } catch (err) {
        return err;
    }
};


export const updateAlertStatus = async (phoneNumber, alertStatus) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/updateAlertStatus`, null, {
            params: {
                phoneNumber: phoneNumber,
                alertStatus: alertStatus
            }
        });

        return response;
    } catch (err) {
        return err;
    }
}
