import  axios  from 'axios';

const api = axios.create({
    baseURL: 'https://discord.com/api'
});

const api_git = axios.create({
    baseURL: 'https://192.168.100.13:4000'
});

export { api, api_git };