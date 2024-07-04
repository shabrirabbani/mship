import React, { useState } from "react";
import CardMember from "./CardMember";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

const MemberList = () => {
    const [members, setMembers] = useState([
        {name: 'Chiky Ganteng', email: 'chiky@example.com', phone: '0813526283'},
        {name: 'Eter Nakal', email: 'eter@example.com', phone: '08952764272'}
    ])

    const [editingMember, setEditingMember] = useState(null)

    const addMember = (newMember) => {
        setMembers([...members, newMember])
    }

    const editMember = (member) => {
        setEditingMember(member)
    }

    return (
      <div className="">
        <FormInput addMember={addMember} editingMember={editingMember}/>
        <h3 className="text-center mt-5 underline-dark">All Member</h3>
        <div className="row text-center my-5">
          {members.map((member, index) => (
            <div className="col-md-4 " key={index}>
              <CardMember member={member} editMember={editMember}/>
            </div>
          ))}
        </div>
        {/* <button type="button" className='btn btn-primary mb-4' onClick={handleAddMember}>Add Member</button> */}
      </div>
    );
}

export default MemberList