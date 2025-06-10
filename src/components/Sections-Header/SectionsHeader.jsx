import Button from "../Button/Button.jsx";
import Button from "../Button/Button.jsx";
import "./sections-header.css";

export default function SectionsHeader({ title, label, color, openModal }) {
  return (
    <div className="sections-header w-100 d-flex flex-column justify-content-between align-items-center gap-4">
      <h2 style={{ color: color }}>{title}</h2>
      <Button label={label} onClick={openModal} />
    </div>
  );
}
