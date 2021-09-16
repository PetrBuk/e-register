import { DataProvider } from 'ra-core'

import { articles } from './dummyData'

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const dataProvider: DataProvider = {
    getList: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
            const data = articles.filter(obj => obj.type === resource)
            return resolve({ data, total: 10 })
        })
    },
    getOne: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
            const data = articles.filter(obj => JSON.stringify(obj.id) === params.id)
            return resolve({ data: data[0] })
        })
    },
    getMany: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
            const data = articles.filter(obj => obj.id in params.ids)
            return resolve({ data })
        })
    },
    getManyReference: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
            return resolve({
                data: [],
                total: 10
            })
        })
    },
    create: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
            articles.push({ type: resource, ...params.data })
            return resolve({
                data: params.data
            })
        })
    },
    update: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            await sleep(200)
            const data = articles.find(obj => obj.id === params.id)
            return resolve({ data })
        })
    },
    updateMany: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            return resolve({ data: params.data })
        })
    },
    delete: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            return resolve({ data: { id: 1 } as any })
        })
    },
    deleteMany: (resource, params) => {
        return new Promise(async (resolve, reject) => {
            return resolve({ data: {} as any })
        })
    }
}

export default dataProvider