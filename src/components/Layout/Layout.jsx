import "./layout.css";
import SideBar from "../SideBar/SideBar.jsx";
import TopBar from "../TopBar/TopBar.jsx";
import { useState } from "react";

export default function Layout({ children, page, theme, setTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout d-flex flex-column h-auto">
      <SideBar isOpen={sidebarOpen} />
      <div className="main-container d-flex flex-column w-100 gap-50">
        <TopBar
          page={page}
          theme={theme}
          setTheme={setTheme}
          toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
        <main className="w-100 px-3 d-flex flex-column align-items-center gap-6 h-100">
          {children}
        </main>
      </div>
    </div>
  );
}
