import { Outlet } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import FormInput from './components/FormInput'
import Dashboard from './pages/Dashboard'
import CardMember from './components/CardMember'
import MemberList from './components/MemberList'

function App() {
  return (
    <div className='container'>
      <Login />
      <Outlet />
      {/* <FormInput /> */}
      {/* <MemberList /> */}
      {/* <Dashboard /> */}
    </div>
  )
}

export default App
