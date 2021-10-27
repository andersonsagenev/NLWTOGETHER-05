import  axios  from 'axios';

const api = axios.create({
    baseURL: 'https://discord.com/api'
});

const api_git = axios.create({
    baseURL: 'http://192.168.100.13:4000'
});

export { api, api_git };