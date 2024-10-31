import axios from "axios";

export const getJson = function (method) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: method,
            dataType: "json",
            crossDomain: true,
            cache: false
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}


/*
import axios from 'axios';

// create an axios instance
const service = axios.create({
    method: 'get',
    crossDomain: true,
    dataType: 'json',
    baseURL: 'http://113.45.155.109/',
    // withCredentials: true,
    // send cookies when cross-domain requests
    timeout: 5000 // axios.createrequest timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        return config;
    },
    error => {
        // do something with request error
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    /!**
     * If you want to get http information such as headers or code
     * Please return  response => response
     *!/

    /!**
     * Determine the request code by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     *!/
    response => {
        const res = response.data;
        // console.log(response);
        if (!res) {
            const errorMsg =
                response.config.url ? `加载"${response.config.url}"失败`
                    : '请指定所需加载的JSON地址';
            alert(errorMsg);
            return Promise.reject(new Error(errorMsg));
        }
        return res;
    },
    error => {
        alert(error.message);
        return Promise.reject(error);
    }
);

export default service;
*/
