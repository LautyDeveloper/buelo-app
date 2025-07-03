// src/pages/Turnos/Turnos.jsx
import "./turnos.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeaders from "../../components/Sections-Header/SectionsHeader";
import Turno from "./components/Turno/Turno";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import { AddShiftForm } from "../../components/AddForms/AddForms";
import { fetchShifts } from "../../api/shifts";
import { formatDateTime, formatTime } from "../../utils/formatDateTime";
import { useElderlyPerson } from "../../context/ElderlyPersonContext.jsx";
import StatusDisplay from "../../components/StatusDisplay/StatusDisplay";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteShift } from "../../api/shifts.js"; // donde tengas la función

export default function Turnos({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { activePerson } = useElderlyPerson();

  const {
    data: shifts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["shifts", activePerson?.id],
    queryFn: () => fetchShifts(activePerson.id),
    enabled: !!activePerson?.id,
  });

  const queryClient = useQueryClient();

  const { mutate: removeShift } = useMutation({
    mutationFn: deleteShift,
    onSuccess: () => {
      queryClient.invalidateQueries(["shifts", activePerson]); // refresca la data
    },
    onError: (err) => {
      console.error("Error eliminando turno", err);
    },
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
          noActiveUser={!activePerson}
          emptyCondition={
            !isLoading &&
            !isError &&
            activePerson &&
            (!shifts || shifts.length === 0)
          }
          emptyDataMessage="No hay turnos programados."
          // loadingMessage="Cargando turnos..." // Example of custom message
          // errorMessage="Hubo un error al cargar los turnos." // Example of custom message
        >
          {shifts &&
            shifts.map((shift, index) => {
              // Render only if turnos has data
              const { date } = formatDateTime(shift.dia);
              const { time } = formatTime(shift.hora);
              const isNext = index === 0; // Solo el primer turno es el próximo

              return (
                <Turno
                  key={shift.id}
                  id={shift.id} // 👈 pasamos el id
                  date={date}
                  time={time}
                  especiality={shift.especialidad}
                  profesional={shift.profesional}
                  spot={shift.lugar}
                  isNext={isNext} // pasamos la prop
                  onDelete={() => {
                    if (
                      confirm("¿Estás seguro que querés eliminar este turno?")
                    ) {
                      removeShift(shift.id);
                    }
                  }}
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
