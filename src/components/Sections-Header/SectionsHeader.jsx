import Button from "../Button/Button.jsx";
import Button from "../Button/Button.jsx";
import "./sections-header.css";

export default function SectionsHeader({ title, label, color, openModal }) {
  return (
    <div className="sections-header">
      <h2 style={{ color: color }}>{title}</h2>
      <Button label={label} onClick={openModal} />
    </div>
  );
}
