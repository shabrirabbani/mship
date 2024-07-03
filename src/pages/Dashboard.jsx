import React from 'react'
import Sidebar from '../components/Sidebar'
import CardMember from '../components/CardMember';

export default function Dashboard() {
  return (
    <div className="container">
      <div className='ms-5'>
        <Sidebar />
        <div className='' style={{marginLeft: "150px"}}>
            <CardMember/>
        </div>
      </div>
    </div>
  );
}
