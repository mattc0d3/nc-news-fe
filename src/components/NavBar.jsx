import { Link } from 'react-router-dom'

const NavBar = () => {
    return <section id="navbar-container">
        <ul id="navbar">
            <li><Link to="/"><img src="../src/assets/news-icon.png" alt="news-icon-logo" id="logo-img" />NC News</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    </section>
}

export default NavBar