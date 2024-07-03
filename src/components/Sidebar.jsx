import React from 'react'
import { IconMenu2 } from '@tabler/icons-react'

export default function Sidebar() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-start show"
        style={{width: "230px"}}
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel">
            Offcanvas
          </h5>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>Home</li>
            <li>Daftar Member</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
