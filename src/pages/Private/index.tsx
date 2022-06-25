import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export function Private(){

    const auth = useContext(AuthContext)

    return(
        <h1>
            BEM VINDO {auth.user?.name}
        </h1>
    )
}