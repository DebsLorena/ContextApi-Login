import { useContext } from 'react'
import { AuthContext } from '../../context/Auth/AuthContext'

const Private = () => {

  const auth = useContext(AuthContext);
  
  return (
    <div>
      <h2>Página Privada</h2>

      Olá, {auth.user?.name}, tudo bem?
    </div>
  )
}

export default Private