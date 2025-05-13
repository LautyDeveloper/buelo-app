import "./main-card.css";

export default function MainCard({
  icon,
  title,
  phrase,
  backColor,
  textColor,
  labelButton,
  url,
  children,
}) {
  return (
    <div className="main-card">
      <div className="main-card-header" style={{ backgroundColor: backColor }}>
        <h1 style={{ color: textColor }}>
          {icon} {title}
        </h1>
        <p>{phrase}</p>
      </div>
      <div className="main-card-content">
        {children}
        <div className="main-card-footer">
          <a className="see-all-btn" href={url}>
            {labelButton}
          </a>
          <button className="add-btn">+</button>
        </div>
      </div>
    </div>
  );
}
