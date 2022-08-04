import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV !== 'development' ? "https://next-events-mongo-db.vercel.app/api/" : "http://localhost:3000/api/",
});
export default axiosInstance;