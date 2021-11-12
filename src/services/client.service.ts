import axios, { AxiosResponse } from 'axios'

interface IClient {
    firstName: string
    lastName: string
    birthdate: Date
}

export const saveClientData = async (body: IClient) => {
    try {
        const { data: response } = await axios.post('/client', body)
        const { data, success} : {data: any, success: boolean} = response

        if (!success) throw new Error('algo salio mal')

        return data.record
    } catch (error) {
        console.error(error)
    }
}

export const getAllClientsData = async () => {
    try {
        const { data: response } = await axios.get('/client')
        const { data, success} : {data: any, success: boolean} = response

        if (!success) throw new Error('algo salio mal')

        return data.clients
    } catch (error) {
        console.error(error)
    }
}

export const getSingleClientData = async (id: number) => {
    try {
        const { data: response } = await axios.get(`/client/${id}`)
        const { data, success} : {data: any, success: boolean} = response

        if (!success) throw new Error('algo salio mal')

        return data.client
    } catch (error) {
        console.error(error)
    }
}

export const getAverageData = async () => {
    try {
        const { data: response } = await axios.get('/client/average')
        const { data, success} : {data: any, success: boolean} = response

        if (!success) throw new Error('algo salio mal')

        return data.average
    } catch (error) {
        console.error(error)
    }
}
