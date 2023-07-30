import { useContext } from "react"
import { UserContext } from "../contexts/User"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons' 

const LogInDisplay = () => {
    const { user, setUser } = useContext(UserContext)

    return <p id="login-display"><FontAwesomeIcon id="user-icon" icon={faUser} /> {user}</p>
}

export default LogInDisplay