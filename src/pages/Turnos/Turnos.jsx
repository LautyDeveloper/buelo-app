// src/pages/Turnos/Turnos.jsx
import "./turnos.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeaders from "../../components/Sections-Header/SectionsHeader";
import Turno from "./components/Turno/Turno";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import { AddShiftForm } from "../../components/AddForms/AddForms";
import { useQuery } from "@tanstack/react-query";
import { fetchShifts } from "../../api/shifts";
import { formatDateTime, formatTime } from "../../utils/formatDateTime";
import { usePersonaMayor } from "../../context/PersonaMayorContext";
import StatusDisplay from "../../components/StatusDisplay/StatusDisplay";

export default function Turnos({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { personaActiva } = usePersonaMayor();

  const {
    data: shifts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["shifts", personaActiva?.id],
    queryFn: () => fetchShifts(personaActiva.id),
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
          emptyCondition={
            !isLoading &&
            !isError &&
            personaActiva &&
            (!shifts || shifts.length === 0)
          }
          emptyDataMessage="No hay turnos programados."
          // loadingMessage="Cargando turnos..." // Example of custom message
          // errorMessage="Hubo un error al cargar los turnos." // Example of custom message
        >
          {shifts &&
            shifts.map((shift) => {
              // Render only if turnos has data
              const { date } = formatDateTime(shift.dia);
              const { time } = formatTime(shift.hora);
              return (
                <Turno
                  key={shift.id}
                  date={date}
                  time={time}
                  especiality={shift.especialidad}
                  profesional={shift.profesional}
                  spot={shift.lugar}
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
