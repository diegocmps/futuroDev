import { Link } from "react-router-dom"
import './sidebar.css'

function SideBar() {
    return (
        <>
            <div className="sidebar">
                <h4>Empresa XYZ</h4>
                <legend>MENU</legend>
                <Link to='/'>Overview</Link>
                <Link to='/bicicletas'>Bicicletas</Link>
            </div>
        </>
    )
}

export default SideBar