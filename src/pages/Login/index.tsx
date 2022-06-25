import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Login = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleLogin = async () => {
        if(email && senha ){
             const isLogged = await auth.signin(email, senha)
             if(isLogged){
                navigate("/")
             }else{
                alert('Dados Inexistentes')
             }
        }
    }

    return (
        <div>
            <p>
                Página Bloqueada
            </p>

            <input
                type="text"
                onChange={event => setEmail(event.target.value)}
                value={email}>
            </input>

            <input
                type="password"
                onChange={e => setSenha(e.target.value)}
                value={senha}>
            </input>
            <br></br>
            <button onClick={handleLogin}>LOGAR</button>
        </div>
    )
}