import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <ul>
                    <li><Link to="/">Crear cliente</Link></li>
                    <li><Link to="/list">Listar clientes</Link></li>
                    <li><Link to="/average">Promedio de edad</Link></li>
                </ul>
            </header>
        </>
    )
}

export default Header
