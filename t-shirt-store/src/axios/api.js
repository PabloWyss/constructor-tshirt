import axios from 'axios';

export const motionApi = axios.create({
    baseURL: 'https://motion.propulsion-home.ch/'
});