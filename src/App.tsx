import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Private from './pages/Private';
import { RequireAuth } from './context/Auth/RequireAuth';
import { AuthContext } from './context/Auth/AuthContext';

function App() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    window.location.href= window.location.href;
    // navigate('/');
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/"> Home </Link><br/>
          <Link to="/private"> Pagina privada </Link><br/>
          {auth.user && <button onClick={handleLogout}> Sair </button>}
        </nav>
      </header>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />

      </Routes>
    </div>
  );
}

export default App;
