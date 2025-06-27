// src/pages/Medicacion/Medicaciones.jsx
import { AddMedicineForm } from "../../components/AddForms/AddForms";
import Layout from "../../components/Layout/Layout";
import ModalForm from "../../components/ModalForm/ModalForm";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import useModal from "../../hooks/useModal";
import Medicacion from "./components/Medicacion/Medicacion";
import "./Medicaciones.css";
import { useQuery } from "@tanstack/react-query";
import { fetchMedications } from "../../api/medications.js";
import { useElderlyPerson } from "../../context/ElderlyPersonContext.jsx";
import StatusDisplay from "../../components/StatusDisplay/StatusDisplay";

export default function Medicaciones({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { activePerson } = useElderlyPerson();

  const {
    data: medications,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["medications", activePerson?.id],
    queryFn: () => fetchMedications(activePerson.id),
    enabled: !!activePerson?.id,
  });

  return (
    <Layout theme={theme} setTheme={setTheme} page={"Medicaciones"}>
      <SectionsHeader
        title={"Medicaciones"}
        label={"Agregar Medicacion"}
        color={"var(--medicineFontColor)"}
        openModal={openModal}
      />
      <div className="medicaciones-container">
        <StatusDisplay
          isLoading={isLoading}
          isError={isError}
          error={error}
          noActiveUser={!activePerson}
          emptyCondition={
            !isLoading &&
            !isError &&
            activePerson &&
            (!medications || medications.length === 0)
          }
          emptyDataMessage="No hay medicaciones programadas."
        >
          {medications &&
            medications.map((medication, index) => {
              const isNext = index === 0; // Solo el primer turno es el próximo
              return (
                <Medicacion
                  key={medication.id}
                  name={medication.nombre_medicacion}
                  frecuency={medication.frecuencia}
                  dosis={medication.dosis}
                  schedules={medication.horarios.split(",")}
                  isNext={isNext} // pasamos la prop
                />
              );
            })}
        </StatusDisplay>
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
