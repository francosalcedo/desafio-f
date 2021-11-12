import { useRoutes } from 'react-router-dom'

import PageCreate from './pages/create.page'
import PageList from './pages/list.page'
import PageAverage from './pages/average.page'

import Layout from './components/layout'

const ApplicationRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <PageCreate /> },
        { path: '/list', element: <PageList /> },
        { path: '/average', element: <PageAverage /> },
    ])

    return routes
}

function App() {
    return (
        <>
            <Layout>
                <ApplicationRoutes/>
            </Layout>
        </>
    )
}

export default App
