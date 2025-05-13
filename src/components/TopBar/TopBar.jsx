import "./top-bar.css";

export default function TopBar({ page, theme, setTheme }) {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className="topbar-container">
      <div className="topbar-content">
        <h1>{page}</h1>
        <button onClick={toggleTheme}>
          Cambiar a {theme === "light" ? "oscuro" : "claro"}
        </button>
        <button>
          {window.innerWidth < 768 ? "🤶" : "🤶 Lucrecia Bacigalupo"}
        </button>
      </div>
    </div>
  );
}
