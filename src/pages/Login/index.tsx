import { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/AuthContext';

const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => { 
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Não deu certo.")
            }
        }

    }

        // outras formas de fazer o onChange 
        // const handleEmailInput = (event: ChangeEvent<HTMLInputElement) => {
        //     setEmail(event.target.value);
        // }

        // const handlePasswordInput = (event: ChangeEvent<HTMLInputElement) => {
        //     setPassword(event.target.value);
        // }

    return (
        <div>
            <h2>Página Fechada</h2>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" />
            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}

export default Login