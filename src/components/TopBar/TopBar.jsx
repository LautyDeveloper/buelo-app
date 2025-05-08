import "./top-bar.css";

export default function TopBar({ page }) {
  return (
    <div className="topbar-container">
      <div className="topbar-content">
        <h1>{page}</h1>
        <button>🤶</button>
      </div>
    </div>
  );
}
