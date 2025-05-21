import { AddMedicineForm } from "../../components/AddForms/AddForms";
import Layout from "../../components/Layout/Layout";
import ModalForm from "../../components/ModalForm/ModalForm";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import useModal from "../../hooks/useModal";
import Medicacion from "./components/Medicacion/Medicacion";
import "./Medicaciones.css";

export default function Medicaciones({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Layout theme={theme} setTheme={setTheme} page={"Medicaciones"}>
      <SectionsHeader
        title={"Medicaciones"}
        label={"Agregar Medicacion"}
        color={"var(--medicineFontColor)"}
        openModal={openModal}
      />
      <div className="medicaciones-container">
        <Medicacion
          name={"Lorsatan 50mg"}
          frecuency={"Todos los Dias"}
          dosis={"2 comprimidos"}
          schedules={["15:00", "20:00"]}
        />
        <Medicacion
          name={"Lorsatan 50mg"}
          frecuency={"Todos los Dias"}
          dosis={"2 comprimidos"}
          schedules={["15:00", "20:00"]}
        />
        <Medicacion
          name={"Lorsatan 50mg"}
          frecuency={"Todos los Dias"}
          dosis={"2 comprimidos"}
          schedules={["15:00", "20:00"]}
        />
        <Medicacion
          name={"Lorsatan 50mg"}
          frecuency={"Todos los Dias"}
          dosis={"2 comprimidos"}
          schedules={["15:00", "20:00"]}
        />
      </div>
      <ModalForm
        title={"Agregar Medicacion"}
        parragraph={
          "Completa los datos de la Medicacion, y no te olvides nunca mas de una Medicacion!"
        }
        isOpen={isOpen}
        onClose={closeModal}
      >
        <AddMedicineForm />
      </ModalForm>
    </Layout>
  );
}
