import axios from 'axios'
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

const siteTarget = ((process.env.SITE_TARGET as string | undefined) || 'CN').toUpperCase()
const isEN = siteTarget === 'EN'

const service: AxiosInstance = axios.create({
    baseURL: isEN ? 'https://config.ios.en.biggerlens.com' : 'https://config.ios.biggerlens.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    error => {
        const {response} = error
        return Promise.reject(error)
    }
)

export default service
