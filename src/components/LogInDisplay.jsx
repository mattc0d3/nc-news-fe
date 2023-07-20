import { useContext } from "react"
import { UserContext } from "../contexts/User"

const LogInDisplay = () => {
    const { user, setUser } = useContext(UserContext)

    return <p id="login-display">User: {user}</p>
}

export default LogInDisplay