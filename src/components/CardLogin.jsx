import React, { useState } from 'react'
import Dashboard from '../pages/Dashboard';
import { Link } from 'react-router-dom';

export default function CardLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = (event) => {
        event.preventDefault(); 
        setIsLoggedIn(true);
        window.location.href = '/dashboard'
    }

  return (
    <div className='d-flex row'>
        <form>
            <div className="mb-3">
                <label name="username" className="form-label">Email</label>
                <input type="email" className="form-control" id="username" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label name="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}
