import React from 'react'
import { IconMenu2 } from '@tabler/icons-react'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-start show"
        style={{width: "230px"}}
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
        data-bs-backdrop="false">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel">
            Offcanvas
          </h5>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>Home</li>
            <Link to="/daftarmember">Daftar Member</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
