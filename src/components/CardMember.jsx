import React from 'react'

const CardMember = ({ member }) => {
  if (!member) {
    return null; // Or you can return some placeholder content
  }
  
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{member.name}</h5>
        <p className="card-text">Email: {member.email}</p>
        <p className="card-text">Phone: {member.phone}</p>
      </div>
    </div>
  )
}

export default CardMember
