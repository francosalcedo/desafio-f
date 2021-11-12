import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { saveClient, resetClient } from '../redux/actions/client.action'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

const PageCreate = () => {
    const dispatch = useAppDispatch()
    const client = useAppSelector((state: any) => state.client)
    const [completed, setCompleted] = useState(false)

    const initialValues = {
        firstName: '',
        lastName: '',
        birthdate: ''
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        birthdate: Yup.date().required()
    })

    const submit = async (entries: any) => {
        try {
            await dispatch(saveClient(entries))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (client.payload) setCompleted(true)
    }, [client])

    useEffect(() => {
        dispatch(resetClient())
        setCompleted(false)
    }, [])

    return (
        <>
            <div>
                {
                    completed && <>
                        <div className='create-success'>
                            <h2>Se agregó el siguiente cliente</h2>
                            <span><i>Nombre:</i> <strong>{client.payload.firstName}</strong></span>
                            <span><i>Apellido:</i> <strong>{client.payload.lastName}</strong></span>
                            <span><i>Año de nacimiento:</i> <strong>{(() => {
                                let date = new Date(client.payload.birthdate)
                                return `${date.getUTCDate()} - ${date.getUTCMonth() + 1} - ${date.getUTCFullYear()}`
                            })()}</strong></span>
                        </div>
                    </>
                }

                {
                    !completed && <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submit}
                  >
                    { formik => (
                      <Form className='create__form'>
                        <div className="create__form-group">
                          <div className="create__form-title">Nombre</div>
                          <div className="create__form-inputs">
                            <label><Field type="input" name="firstName"/></label>
                          </div>
                        </div>

                        <div className="create__form-group">
                          <div className="create__form-title">Apellido</div>
                          <div className="create__form-inputs">
                            <label><Field type="input" name="lastName" /></label>
                          </div>
                        </div>

                        <div className="create__form-group">
                          <div className="create__form-title">Fecha de nacimiento</div>
                          <div className="create__form-inputs">
                            <label><Field type="date" name="birthdate"/></label>
                          </div>
                        </div>

                        <div className="create__form-group">
                          <div className="create__form-submit">
                            <button type="submit" disabled={ !(formik.isValid && formik.dirty) }>Enviar respuesta</button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                }
            </div>
        </>
    )
}

export default PageCreate
