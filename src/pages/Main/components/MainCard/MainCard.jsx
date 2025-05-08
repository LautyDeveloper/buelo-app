import "./main-card.css";

export default function MainCard({
  title,
  phrase,
  backColor,
  textColor,
  labelButton,
  children,
}) {
  return (
    <div className="main-card">
      <div className="main-card-header" style={{ backgroundColor: backColor }}>
        <h1 style={{ color: textColor }}>{title}</h1>
        <p>{phrase}</p>
      </div>
      <div className="main-card-content">
        {children}
        <div className="main-card-footer">
          <button className="see-all-btn">{labelButton}</button>
          <button className="add-btn">+</button>
        </div>
      </div>
    </div>
  );
}
