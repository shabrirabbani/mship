import React from 'react'
import Sidebar from '../components/Sidebar'
import CardMember from '../components/CardMember';
import MemberList from '../components/MemberList';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="container">
      <div className='ms-5'>
        {/* <Sidebar /> */}
        <div className='' style={{marginLeft: "150px"}}>
          <h1>Dashboard</h1>
          <MemberList/>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
