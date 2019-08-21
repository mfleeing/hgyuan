import axios from 'axios';

axios.defaults.baseURL = 'http://www.e7520.com'
    // axios.defaults.withCredentials = true      当启用时,上传cookie,地址为http://localhost:8080,不启用时,不上传cookie,可以用通配符*
export const getlist = (url, data) => {
    return axios.get(url, {
        params: data
    })

}