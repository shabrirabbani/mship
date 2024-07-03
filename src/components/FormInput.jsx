import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormInput = ({addMember}) => {
    const initialValue = { name: '', email: '', phone: '' }
    const [values, setValues] = useState(initialValue)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addMember(values)
        setValues(initialValue)
        navigate('/dashboard')
    }

  return (
    <div className='container-fluid'>
        <form onSubmit={handleSubmit} className='shadow p-4 rounded-2'>
            <div className="mb-3">
                <label name="name" className='form-label'>Name</label>
                <input type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder='Please enter member name'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label name="email">Email</label>
                <input type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder='email@example.com'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label name="phone">Phone Number</label>
                <input type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder='08xxx'
                    className='form-control'
                />
            </div>
            <div className="d-flex gap-5 mt-4">
                <button type="submit" className="btn bg-primary">Submit</button>
            </div>
            
        </form>

    </div>
  )
}

export default FormInput
