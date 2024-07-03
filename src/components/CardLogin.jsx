import React from 'react'

export default function CardLogin() {

  return (
    <div className='d-flex row'>
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Email</label>
                <input type="email" class="form-control" id="username" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
  )
}
