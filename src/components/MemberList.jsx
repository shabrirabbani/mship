import React, { useState } from "react";
import CardMember from "./CardMember";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

const MemberList = () => {
    const [members, setMembers] = useState([
        {name: 'Chiky Ganteng', email: 'chiky@example.com', phone: '0813526283'},
        {name: 'Eter Nakal', email: 'eter@example.com', phone: '08952764272'}
    ])

    const navigate = useNavigate()

    const addMember = (newMember) => {
        setMembers([...members, newMember])
    }

    const handleAddMember = () => {
        // event.preventDefault()
        navigate('/dashboard/add-member')
    }

    return (
        <div className="container">
            <h1 className="my-4">All Member</h1>
            
            <div className="row">
                {members.map((member, index) => (
                    <div className="col-md-4" key={index}>
                        <CardMember member={member} />
                    </div>
                ))}
            </div>
            {/* <button type="button" className='btn btn-primary mb-4' onClick={handleAddMember}>Add Member</button> */}

            <FormInput addMember={addMember} />
        </div>
    )
}

export default MemberList