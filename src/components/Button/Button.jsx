import "./button.css"; // Contains .custom-button-styling

export default function Button({ label, onClick, className }) {
  // Combines global utility classes, component-specific styles, and any custom classes passed via props
  const buttonClasses = `btn btn-primary custom-button-styling ${className || ''}`.trim();

  return (
    <button className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
}
