import { AuthProvider } from 'react-admin'
import axios from 'axios'
import Cookies from 'js-cookie'

const apiUrl = 'http://localhost:5000/api/'

const authProvider: AuthProvider = {
    login: (params) => {
        return new Promise((resolve, reject) => {
            axios.post(apiUrl + 'auth', {
                email: params.username,
                password: params.password
            }, {
                withCredentials: true
            }).then(resp => {
                console.log(resp)
                return resolve('')
            }).catch(err => {
                console.log(err)
                return reject(err)
            })
        })
    },
    logout: (params) => {
        return new Promise((resolve, reject) => {
            Cookies.remove('jwtp')
            return resolve()
        })
    },
    checkAuth: (params) => {
        return new Promise((resolve, reject) => {
            if (Cookies.get('jwtp')) {
                return resolve()
            }
            return reject()
        })
    },
    checkError: (params) => {
        return new Promise((resolve, reject) => {
            return resolve()
        })
    },
    getPermissions: (params) => {
        return new Promise((resolve, reject) => {
            resolve({ perms: [1, 2, 3] })
        })
    },
}

export default authProvider;