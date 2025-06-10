import "./notas.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import Nota from "./components/Nota/Nota";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import { AddNoteForm } from "../../components/AddForms/AddForms";

export default function Notas({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Layout theme={theme} setTheme={setTheme} page={"Notas"}>
      <SectionsHeader
        title={"Notas Familiares"}
        label={"Añadir un Nota"}
        color={"var(--notesFontColor)"}
        openModal={openModal}
      />
      <div className="notas-container">
        <Nota
          title={"Revisar la Presion"}
          date={"05 de Mayo"}
          time={"18:23hs"}
          note={
            "Tenemos que revisarle la Presion antes del turno con el cardiologo. Anotarlo en el papel"
          }
        />
        <Nota
          title={"Revisar la Presion"}
          date={"05 de Mayo"}
          time={"18:23hs"}
          note={
            "Tenemos que revisarle la Presion antes del turno con el cardiologo. Anotarlo en el papel"
          }
        />
        <Nota
          title={"Revisar la Presion"}
          date={"05 de Mayo"}
          time={"18:23hs"}
          note={
            "Tenemos que revisarle la Presion antes del turno con el cardiologo. Anotarlo en el papel"
          }
        />
        <Nota
          title={"Revisar la Presion"}
          date={"05 de Mayo"}
          time={"18:23hs"}
          note={
            "Tenemos que revisarle la Presion antes del turno con el cardiologo. Anotarlo en el papel"
          }
        />
      </div>
      <ModalForm
        title={"Agregar Nueva Nota"}
        parragraph={
          "Completa los datos de tu Persona Mayor, y empeza a gestionar su vida mucho mas facil"
        }
        isOpen={isOpen}
        onClose={closeModal}
      >
        <AddNoteForm />
      </ModalForm>
    </Layout>
  );
}
