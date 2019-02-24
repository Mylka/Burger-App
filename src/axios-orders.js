import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-cdd5e.firebaseio.com/'
});


export default instance;