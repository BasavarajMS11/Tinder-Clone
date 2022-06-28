import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend101.herokuapp.com',
});

export default instance;