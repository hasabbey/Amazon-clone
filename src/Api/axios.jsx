
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5001/clone-1fc82/us-central1/api', // Replace with your HTTPS API base URL
  // Other configuration options if needed
});

export default axiosInstance;
