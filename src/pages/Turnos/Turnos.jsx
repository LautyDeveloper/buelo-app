// src/pages/Turnos/Turnos.jsx
import "./turnos.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeaders from "../../components/Sections-Header/SectionsHeader";
import Turno from "./components/Turno/Turno";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import { AddShiftForm } from "../../components/AddForms/AddForms";
import { useQuery } from "@tanstack/react-query";
import { fetchTurnos } from "../../api/turnos";
import { formatDateTime, formatTime } from "../../utils/formatDateTime";
import { usePersonaMayor } from "../../context/PersonaMayorContext";
import StatusDisplay from "../../components/StatusDisplay/StatusDisplay";

export default function Turnos({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { personaActiva } = usePersonaMayor();

  const {
    data: turnos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["turnos", personaActiva?.id],
    queryFn: () => fetchTurnos(personaActiva.id),
    enabled: !!personaActiva?.id,
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
        <StatusDisplay
          isLoading={isLoading}
          isError={isError}
          error={error}
          noActiveUser={!personaActiva}
          emptyCondition={!isLoading && !isError && personaActiva && (!turnos || turnos.length === 0)}
          emptyDataMessage="No hay turnos programados."
          // loadingMessage="Cargando turnos..." // Example of custom message
          // errorMessage="Hubo un error al cargar los turnos." // Example of custom message
        >
          {turnos && turnos.map((t) => { // Render only if turnos has data
            const { date } = formatDateTime(t.dia);
            const { time } = formatTime(t.hora);
            return (
              <Turno
                key={t.id}
                date={date}
                time={time}
                especiality={t.especialidad}
                profesional={t.profesional}
                spot={t.lugar}
              />
            );
          })}
        </StatusDisplay>
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
