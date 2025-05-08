import "./layout.css";
import SideBar from "../SideBar/SideBar.jsx";
import TopBar from "../TopBar/TopBar.jsx";

export default function Layout({ children, page }) {
  return (
    <div className="layout">
      <SideBar />
      <div className="main-container">
        <TopBar page={page} />
        <main>{children}</main>
      </div>
    </div>
  );
}
