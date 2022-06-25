import { useContext, useEffect, useState } from 'react'
import { Link, Route, Router, Routes, useNavigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Private } from './pages/Private'
import styles from './App.module.scss';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {

  const auth = useContext(AuthContext)

  const navigate = useNavigate()
  const handleLogout = async () => {
    await auth.signout();
    navigate('/Private')
  }

  return (
    <div className={styles.body}>
      <header>
        Header e Links
      </header>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/private">Admin Access</Link>
       {auth.user && <button onClick={handleLogout}>Sair</button>}
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
  )
}

export default App
