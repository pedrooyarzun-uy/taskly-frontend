import axios from "axios";

export const api = axios.create({
    baseURL:  import.meta.env.VITE_BACKEND_URL + "/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("credentials");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});