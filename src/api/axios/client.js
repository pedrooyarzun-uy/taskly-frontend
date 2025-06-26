import axios from "axios";

export const api = axios.create({
    baseURL:  import.meta.env.BACKEND_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

