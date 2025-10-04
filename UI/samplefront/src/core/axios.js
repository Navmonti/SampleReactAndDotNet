import axios from "axios";



const api = axios.create({
    baseURL: "https://api.example.com",
    timeout: 10000,
});


api.interceptors.request.use(
    (config) => {
        debugger;
        //console.log("Request:", config.method?.toUpperCase(), config.url);
        //config.headers["X-Custom-Header"] = "myHeaderValue";
        return config;
    },
    (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
    }
);


api.interceptors.response.use(
    (response) => {
        debugger;
        console.log("Response:", response.status, response.data);
    },
    (error) => {
        if (error.response) {
            console.error("Response error:", error.response.status, error.response.data);
            if (error.response.status === 401) {
                console.warn("Unauthorized! Redirecting to login...");
            }
        } else {
            console.error("Network or Server error:", error.message);
        }
        return Promise.reject(error);
    }
);

export default api;
