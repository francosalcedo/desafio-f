import { PayloadAction } from '@reduxjs/toolkit'
import * as TYPE from '../types/client.type'

interface IinitialState {
    done: boolean
	loading: boolean
	error: boolean
	payload: any
}

const initialState: IinitialState = {
	done: false,
	loading: false,
	error: false,
	payload: null,
}

export const clientReducer = ( state: IinitialState = initialState, action: any) => {

	switch (action.type) {
		case TYPE.CLIENT_CONSULTING_DATA:
			return {
                ...state,
                loading: true,
                done: false,
			}

        case TYPE.CLIENT_SET_DATA:
			return {
                ...state,
			    done: true,
				loading: false,
				error: false,
				payload: action.payload
			}

        case TYPE.CLIENT_ERROR:
            return {
                ...state,
                error: true
            }

		case TYPE.CLIENT_RESET:
			return initialState

        default:
            return state
	}
}
