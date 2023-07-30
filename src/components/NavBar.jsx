import { Link } from 'react-router-dom'
import { UserContext } from "../contexts/User"
import { useContext, useState } from "react"

const NavBar = () => {
    const { user, setUser } = useContext(UserContext)

    return <section id="navbar-container">
        <ul id="navbar">
            <li><Link className="nav-link" to="/"><img src="../src/assets/news-icon.png" alt="news-icon-logo" id="logo-img" />NC News</Link></li>
            <li><Link className="nav-link" to={`/users/${user}`}>Profile</Link></li>
        </ul>
    </section>
}

export default NavBar