import axios from 'axios';

export const getUser = async (TOKEN) => {
    try {
        return await axios.get("/api/v1/user/checktoken", { headers : {"x-access-token": TOKEN}});        
    } catch (error) {
        return error.response
    }
}

export const signup = async (datas) => {
    try {
        return await axios.post("/api/v1/user/create", datas);
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const signin = async (datas) => {
    try {
        return await axios.post("/api/v1/user/signin", datas);
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const AccountValidation = async (datas) => {
    try {
        return await axios.patch("/api/v1/user/accountValidation", datas);
    } catch (error) {
        return error.response
    }
}

/*export const register = async (datas) => {
    try {
        return await axios.post("/api/v1/user/register", datas);
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const login = async (datas) => {
    try {
        return await axios.post("/api/v1/user/login", datas);
    } catch (error) {
        console.log(error)
        return error.response
    }
}*/

