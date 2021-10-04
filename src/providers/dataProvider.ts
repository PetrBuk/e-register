import { DataProvider } from 'ra-core'
import axios from 'axios'

const apiUrl = 'http://localhost:5000/api/'

const staticResources = ['User', 'Role', 'Permission']

const getDbResource = (resource: string) => {
    if (resource in staticResources) {
        return resource
    } else return 'article'
}

const dataProvider: DataProvider = {
    getList: (resource, params) => {
        return new Promise((resolve, reject) => {
            axios.get(apiUrl + getDbResource(resource), {
                params,
                headers: {
                    //"Access-Control-Expose-Headers": "Content-Range"
                },
                withCredentials: true
            }).then((resp) => {
                    console.log(resp)
                    return resolve(resp.data)
                }).catch((err) => {
                    console.log(err)
                    return reject(err)
                })
        })
    },
    getOne: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            axios.get(apiUrl + getDbResource(resource) + '/' + params.id, {
                withCredentials: true
            })
                .then(resp => {
                    console.log(resp)
                    return resolve(resp.data)
                }).catch(err => {
                    console.log(err)
                    return reject(err)
                })
        })
    },
    getMany: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            return reject({ message: 'Get many not supported yet' })
        })
    },
    getManyReference: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            return reject({ message: 'Get many reference not supported' })
        })
    },
    create: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            axios.post(apiUrl + getDbResource(resource) + '/' + params.data.id, params.data, {
                withCredentials: true
            })
                .then(resp => {
                    console.log(resp)
                    return resolve(resp.data)
                }).catch(err => {
                    console.log(err)
                    return reject(err)
                })
        })
    },
    update: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            axios.put(apiUrl + getDbResource(resource) + '/' + params.id, params.data, {
                withCredentials: true
            })
                .then(resp => {
                    console.log(resp)
                    return resolve(resp.data)
                }).catch(err => {
                    console.log(err)
                    return reject(err)
                })
        })
    },
    updateMany: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            return reject({ message: 'Update many not supported yet' })
        })
    },
    delete: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            axios.delete(apiUrl + getDbResource(resource) + '/' + params.id, {
                withCredentials: true
            })
                .then(resp => {
                    console.log(resp)
                    return resolve(resp.data)
                }).catch(err => {
                    console.log(err)
                    return reject(err)
                })
        })
    },
    deleteMany: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            return reject({ message: 'Delete many not supported yet' })
        })
    }
}

export default dataProvider