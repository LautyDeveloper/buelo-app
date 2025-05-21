import "./turnos.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeaders from "../../components/Sections-Header/SectionsHeader";
import Turno from "./components/Turno/Turno";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import { AddShiftForm } from "../../components/AddForms/AddForms";

export default function Turnos({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Layout theme={theme} setTheme={setTheme} page={"Turnos"}>
      <SectionsHeaders
        title={"Turnos Medicos"}
        label={"Agregar Turno"}
        color={"var(--shiftsFontColor)"}
        openModal={openModal}
      />
      <div className="turnos-container">
        <Turno
          date={"12 de Mayo"}
          time={"15:00hs"}
          especiality={"Medico Clinico"}
          profesional={"Dr. Suarez"}
          spot={"Hospital Evita"}
        />
        <Turno
          date={"12 de Mayo"}
          time={"15:00hs"}
          especiality={"Medico Clinico"}
          profesional={"Dr. Suarez"}
          spot={"Hospital Evita"}
        />
        <Turno
          date={"12 de Mayo"}
          time={"15:00hs"}
          especiality={"Medico Clinico"}
          profesional={"Dr. Suarez"}
          spot={"Hospital Evita"}
        />
        <Turno
          date={"12 de Mayo"}
          time={"15:00hs"}
          especiality={"Medico Clinico"}
          profesional={"Dr. Suarez"}
          spot={"Hospital Evita"}
        />
      </div>
      <ModalForm
        title={"Agregar Turno"}
        parragraph={
          "Completa los datos del nuevo Turno, y no te olvides nunca mas de un Turno!"
        }
        isOpen={isOpen}
        onClose={closeModal}
      >
        <AddShiftForm />
      </ModalForm>
    </Layout>
  );
}
