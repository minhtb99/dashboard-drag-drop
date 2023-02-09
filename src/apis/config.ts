import axios from "axios";

axios.interceptors.request.use(function (config: any) {
    config.headers = {
        ...config.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS",
        "Access-Control-Max-Age": "1800"
    };
    return config;
}, function (error) {
    return Promise.reject(error);
});

