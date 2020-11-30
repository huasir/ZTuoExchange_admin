import axios from 'axios'
import qs from 'qs'

export const BASEURL = axios.defaults.baseURL = 'http://101.32.11.45:6010';

//export const BASEURL = axios.defaults.baseURL = 'https://manager.coinmany.com';
// export const BASEURL = axios.defaults.baseURL = 'http://39.100.79.158:9090/';
export const fetch = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data, { arrayFormat: 'repeat' }))
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const patch = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.patch(url, qs.stringify(data, { arrayFormat: 'repeat' }))
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const put = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.put(url, qs.stringify(data))
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const postConfig = (url, data = {}, config) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config)
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err);
            })
    })
}