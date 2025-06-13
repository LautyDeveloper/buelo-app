import "./turnos.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeaders from "../../components/Sections-Header/SectionsHeader";
import Turno from "./components/Turno/Turno";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import { AddShiftForm } from "../../components/AddForms/AddForms";
import { useQuery } from "@tanstack/react-query";
import { fetchTurnos } from "../../api/turnos";

export default function Turnos({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();

  const {
    data: turnos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["turnos"],
    queryFn: fetchTurnos,
  });

  return (
    <Layout theme={theme} setTheme={setTheme} page={"Turnos"}>
      <SectionsHeaders
        title={"Turnos Médicos"}
        label={"Agregar Turno"}
        color={"var(--shiftsFontColor)"}
        openModal={openModal}
      />

      <div className="turnos-container">
        {isLoading && <p className="loading">Cargando turnos...</p>}
        {isError && (
          <p className="error">Hubo un error al cargar los turnos.</p>
        )}
        {turnos &&
          turnos.map((t) => (
            <Turno
              key={t.id} // asumí que cada turno tiene un id
              date={t.fecha} // adaptá a cómo viene tu backend
              time={t.hora}
              especiality={t.especialidad}
              profesional={t.profesional}
              spot={t.lugar}
            />
          ))}
      </div>

      <ModalForm
        title={"Agregar Turno"}
        parragraph={
          "Completa los datos del nuevo Turno, y no te olvides nunca más de un Turno!"
        }
        isOpen={isOpen}
        onClose={closeModal}
      >
        <AddShiftForm />
      </ModalForm>
    </Layout>
  );
}
