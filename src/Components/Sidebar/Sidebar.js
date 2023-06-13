import React from "react";
import "./Sidebar.scss";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-menu">
          <ul className="menu-lists">
            <li>
              <span className="sidebar-icon">
                <SortOutlinedIcon fontSize="small" />
              </span>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon"></div>
                <div className="menu-item">Dashboard</div>
              </div>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon"></div>
                <div className="menu-item">Catalog</div>
              </div>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon"></div>
                <div className="menu-item">Inventory</div>
              </div>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon-selected">
                  <i className="bi bi-badge-ad"></i>
                </div>
                <div className="menu-item-selected">Advertising</div>
              </div>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon"></div>
                <div className="menu-item">Product Intelligence</div>
              </div>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon"></div>
                <div className="menu-item">Broadcasting</div>
              </div>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon"></div>
                <div className="menu-item">Reports</div>
              </div>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon"></div>
                <div className="menu-item">Link Accounts</div>
              </div>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon"></div>
                <div className="menu-item">Settings</div>
              </div>
            </li>
            <li>
              <div className="menu">
                <div className="menu-icon"></div>
                <div className="menu-item">Help</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
