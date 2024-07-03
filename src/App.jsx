import { Outlet } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'

function App() {
  return (
    <div className='container'>
      <Login />
      <Outlet />
    </div>
  )
}

export default App
