import Button from "../Button/Button.jsx";
import "./sections-header.css";

export default function SectionsHeader({ title, label }) {
  return (
    <div className="sections-header">
      <h2>{title}</h2>
      <Button label={label} />
    </div>
  );
}
