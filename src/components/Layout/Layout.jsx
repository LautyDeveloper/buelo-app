import "./layout.css";
import SideBar from "../SideBar/SideBar.jsx";
import TopBar from "../TopBar/TopBar.jsx";
import { useState } from "react";

import "./layout.css";
import SideBar from "../SideBar/SideBar.jsx";
import TopBar from "../TopBar/TopBar.jsx";
import { useState } from "react";

export default function Layout({ children, page, theme, setTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <SideBar isOpen={sidebarOpen} />
      <div className="main-container">
        <TopBar
          page={page}
          theme={theme}
          setTheme={setTheme}
          toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
        <main>{children}</main>
      </div>
    </div>
  );
}
