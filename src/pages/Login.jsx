import React from 'react'
import CardLogin from '../components/CardLogin'

export default function Login() {
  return (
    <div>
      <div className="d-flex justify-content-center min-vh-100">
        <div className="row align-items-center">
          <div className="col">
            <h1>Join To Membership</h1>
          </div>
          <div className="col">
            <CardLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
