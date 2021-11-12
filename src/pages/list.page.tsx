import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { getAllClients } from '../redux/actions/client.action'

const PageList = () => {
    const dispatch = useAppDispatch()
    const client = useAppSelector((state: any) => state.client)
    const [data, setData] = useState([])

    const columns = [
        {
          name: 'Nombre',
          selector: (row: any) => row.firstName,
        },
        {
          name: 'Apellido',
          selector: (row: any) => row.lastName,
        },
        {
          name: 'Fecha de nacimiento',
          selector: (row: any) => row.birthdate,
        },
      ]

      const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
      }

      useEffect(() => {
        if (client.payload?.count > 0) {
            let dt = client.payload.rows.map( ({birthdate, firstName, lastName} : {birthdate: string, firstName: string, lastName: string}) => {
                let nd = new Date(birthdate)

                return {
                    birthdate: `${nd.getUTCDate()} - ${nd.getUTCMonth() + 1} - ${nd.getUTCFullYear()}`,
                    firstName,
                    lastName,
                }
            })

            setData(dt)
        }
      }, [client])

      useEffect(() => {
        dispatch(getAllClients())
      }, [])

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                paginationComponentOptions={paginationComponentOptions}
                pagination
            />
        </>
    )
}

export default PageList
