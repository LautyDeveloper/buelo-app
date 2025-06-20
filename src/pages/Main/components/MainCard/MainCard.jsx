import "./main-card.css";
import { Link } from "react-router-dom";
import useModal from "../../../../hooks/useModal";
import ModalForm from "../../../../components/ModalForm/ModalForm";

export default function MainCard({
  icon,
  title,
  phrase,
  backColor,
  textColor,
  labelButton,
  url,
  children,
  modalTitle,
  modalParragraph,
  form,
}) {
  const { isOpen, openModal, closeModal } = useModal();

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
          <Link to={url} className="see-all-btn">
            {labelButton}
          </Link>
          <button onClick={openModal} className="add-btn">
            +
          </button>
        </div>
      </div>

      <ModalForm
        title={modalTitle}
        parragraph={modalParragraph}
        isOpen={isOpen}
        onClose={closeModal}
      >
        {form}
      </ModalForm>
    </div>
  );
}
