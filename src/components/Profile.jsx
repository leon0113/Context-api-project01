import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div>Please Login</div>

    return (
        <>
            <div>Welcome {user.userName}</div>
            <p>Your password: {user.password}</p>
        </>
    )
}

export default Profile