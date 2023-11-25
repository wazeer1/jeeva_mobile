import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://jeevamilk.devprozone.com/api/v1/',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor
api.interceptors.request.use(async (config) => {
    console.log("hello world");

    // Get token from AsyncStorage
    const tokenString = await AsyncStorage.getItem('userData');
    const parsedData = JSON.parse(tokenString)
    const token = parsedData?.access
    console.log(token,"____token strin_____");
    if (token) {
        // Parse token string to get the access token
        // const userData = JSON.parse(tokenString.access);
        
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, error => {
    console.log("error hello");
    return Promise.reject(error);
});

export default api;
