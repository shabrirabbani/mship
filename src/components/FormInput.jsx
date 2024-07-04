import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconSend2 } from '@tabler/icons-react'
import { useEffect } from 'react'

const FormInput = ({addMember, editingMember}) => {
    const initialValue = { name: '', email: '', phone: '' }
    const [values, setValues] = useState(initialValue)

    useEffect(() => {
      if (editingMember) {
        setValues(editingMember);
      } else {
        setValues(initialValue);
      }
    }, [editingMember]);

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
     
        event.preventDefault();
        if (editingMember) {
          addMember(values, true);
        } else {
          addMember(values);
        }
        setValues(initialValue)
    }

  return (
    <div className='container-fluid'>
        <form onSubmit={handleSubmit} className='border shadow-sm p-4 rounded-2'>
            <div className="mb-3">
                <label name="name" className='form-label'>Name</label>
                <input type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder='Please enter member name'
                    className='form-control'
                    required
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
                    required
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
                    required
                />
            </div>
            <div className="d-flex gap-5 mt-4">
                <button type="submit" className="btn bg-light border"><IconSend2/></button>
            </div>
            
        </form>

    </div>
  )
}

export default FormInput
