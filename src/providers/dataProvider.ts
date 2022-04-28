import { DataProvider } from 'ra-core'
import axios from 'axios'

const apiUrl = 'http://localhost:5000/api/'

const staticResources = ['User', 'Role', 'Permission', 'PossessionSettings']

const getDbResource = (resource: string) => {
    console.log(resource)
    if (staticResources.includes(resource)) {
        return resource
    } else return 'possession'
}

const dataProvider: DataProvider = {
    getList: (resource, params) => {
        return new Promise((resolve, reject) => {
            if (getDbResource(resource) === 'possession') {
                const { filter } = params
                filter.typeField = resource
                params.filter = filter
            }
            axios.get(apiUrl + getDbResource(resource), {
                params: { ...params },
                headers: {
                    //"Access-Control-Expose-Headers": "Content-Range"
                },
                withCredentials: true
            }).then((resp: any) => {
                console.log('GET LIST:', resp)
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
                    console.log('GET ONE:', resp)
                    return resolve(resp.data)
                }).catch(err => {
                    console.log(err)
                    return reject(err)
                })
        })
    },
    getMany: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            axios.get(apiUrl + getDbResource(resource) + '/', {
                withCredentials: true,
                params: {
                    filter: {
                        _id: params.ids
                    }
                }
            })
                .then(resp => {
                    console.log('GET MANY:', resp)
                    return resolve(resp.data)
                }).catch(err => {
                    console.log(err)
                    return reject(err)
                })
        })
    },
    getManyReference: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            if (params.id === undefined) {
                resolve({data: [], total: 0})
            }
            axios.get(apiUrl + getDbResource(resource) + '/', {
                withCredentials: true,
                params: {
                    sort: params.sort,
                    pagination: params.pagination,
                    filter: {
                        ...params.filter,
                        _id: params.id
                    }
                }
            })
                .then(resp => {
                    console.log('GET MANY REFERENCE:', resp)
                    return resolve(resp.data)
                }).catch(err => {
                    console.log(err)
                    return reject(err)
                })
        })
    },
    create: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            axios.post(apiUrl + getDbResource(resource), { ...params.data, typeField: resource }, {
                withCredentials: true
            })
                .then(resp => {
                    console.log('CREATE:', resp)
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
                    console.log('UPDATE:', resp)
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
                    console.log('DELETE:', resp)
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