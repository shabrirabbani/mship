import React from 'react'
import { IconPencil } from '@tabler/icons-react';

const CardMember = ({ member, editMember }) => {
  if (!member) {
    return null; // Or you can return some placeholder content
  }

  const handleEdit = () => {
    editMember(member)
  }
  
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{member.name}</h5>
        <p className="card-text">Email: {member.email}</p>
        <p className="card-text">Phone: {member.phone}</p>
        <div className="mt-3 text-end">
          <button className="btn btn-light border" onClick={handleEdit}><IconPencil/></button>
        </div>
      </div>
    </div>
  );
}

export default CardMember
