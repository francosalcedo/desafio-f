import * as TYPE from '../types/client.type'
import { saveClientData, getAllClientsData, getSingleClientData, getAverageData } from '../../services/client.service'
import { Dispatch } from 'react'

interface IClient {
    firstName: string
    lastName: string
    birthdate: Date
}

interface IActions {
    CLIENT_CONSULTING_DATA: string
    CLIENT_SET_DATA: string
    CLIENT_ERROR: string
}

interface IActionPayload {
    type?: string
    payload?: any
}

export const saveClient = (data: IClient) => async (dispatch: Dispatch<IActionPayload>) => {
    dispatch({
        type: TYPE.CLIENT_CONSULTING_DATA
    })

    try {
        const response = await saveClientData(data)

        dispatch({
            type: TYPE.CLIENT_SET_DATA,
            payload: response
        })
    } catch (error) {
        dispatch({
            type: TYPE.CLIENT_ERROR
        })
        console.error(error)
    }
}

export const getAllClients = () => async (dispatch: Dispatch<IActionPayload>) => {
    dispatch({
        type: TYPE.CLIENT_CONSULTING_DATA
    })

    try {
        const response = await getAllClientsData()

        dispatch({
            type: TYPE.CLIENT_SET_DATA,
            payload: response
        })

    } catch (error) {
        dispatch({
            type: TYPE.CLIENT_ERROR
        })
        console.error(error)
    }
}

export const getSingleClient = async (id: number) => async (dispatch: Dispatch<IActionPayload>) => {
    dispatch({
        type: TYPE.CLIENT_CONSULTING_DATA
    })

    try {
        const response = await getSingleClientData(id)

        dispatch({
            type: TYPE.CLIENT_SET_DATA,
            payload: response
        })
    } catch (error) {
        dispatch({
            type: TYPE.CLIENT_ERROR
        })
        console.error(error)
    }
}

export const getAverage = () => async (dispatch: Dispatch<IActionPayload>) => {
    dispatch({
        type: TYPE.CLIENT_CONSULTING_DATA
    })

    try {
        const response = await getAverageData()

        dispatch({
            type: TYPE.CLIENT_SET_DATA,
            payload: response
        })
    } catch (error) {
        dispatch({
            type: TYPE.CLIENT_ERROR
        })
        console.error(error)
    }
}

export const resetClient = () => async (dispatch: Dispatch<IActionPayload>) => {
    dispatch({
        type: TYPE.CLIENT_RESET
    })
}
