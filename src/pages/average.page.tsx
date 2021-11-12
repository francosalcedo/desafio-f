import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { getAverage, resetClient } from '../redux/actions/client.action'

const PageList = () => {
    const dispatch = useAppDispatch()
    const client = useAppSelector((state: any) => state.client)

    useEffect(() => {
        dispatch(getAverage())
    }, [])

    return (
        <>
            {
                client.loading && !client.done && <span>Cargando..</span>
            }

            {
                client.done && !client.loading && <div>Edad promedio: <h1>{client.payload.toString()}</h1></div>
            }
        </>
    )
}

export default PageList
