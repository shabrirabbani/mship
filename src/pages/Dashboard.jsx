import React from 'react'
import MemberList from '../components/MemberList';
import { IconPower } from '@tabler/icons-react';
import {useNavigate} from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div className="container">
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <h1 className="mx-2 mb-3">Dashboard</h1>
          <button className='btn btn-white' onClick={handleLogout}>
            <IconPower />
          </button>
        </div>

        <MemberList />
      </div>
    </div>
  );
}
