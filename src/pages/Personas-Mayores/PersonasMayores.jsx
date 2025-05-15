import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import PersonCard from "./components/MainCard/PersonCard";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import "./personas-mayores.css";
import { AddElderlyPersonForm } from "../../components/AddForms/AddForms";

export default function PersonasMayores({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Layout page={"Personas Mayores"} theme={theme} setTheme={setTheme}>
      <SectionsHeader
        title={"Personas Mayores"}
        label={"Agregar Persona"}
        color={"var(--elderlyPersonColor)"}
        openModal={openModal}
      />
      <div className="persons-container">
        <PersonCard name={"Lucrecia Bacigalupo"} familiar={"3"} age={"65"} />
        <PersonCard name={"Gladys Marinatto"} familiar={"4"} age={"81"} />
        <PersonCard name={"Santiago Aquino"} familiar={"3"} age={"70"} />
        <PersonCard name={"Jose Fedriani"} familiar={"4"} age={"85"} />
      </div>
      <ModalForm
        title={"Agregar Nueva Persona"}
        parragraph={
          "Completa los datos de tu Persona Mayor, y empeza a gestionar su vida mucho mas facil"
        }
        isOpen={isOpen}
        onClose={closeModal}
      >
        <AddElderlyPersonForm />
      </ModalForm>
    </Layout>
  );
}
