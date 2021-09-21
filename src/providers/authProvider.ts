import { AuthProvider } from 'react-admin'

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const authProvider: AuthProvider = {
    login: (params: any) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
            resolve(true)
        })
    },
    logout: (params: any) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
        })
    },
    checkAuth: (params: any) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
        })
    },
    checkError: (params: any) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
        })
    },
    getPermissions: (params: any) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
            resolve({perms: [1, 2, 3]})
        })
    },
}

export default authProvider;