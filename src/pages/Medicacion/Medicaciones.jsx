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
import { usePersonaMayor } from "../../context/PersonaMayorContext";
import StatusDisplay from "../../components/StatusDisplay/StatusDisplay";

export default function Medicaciones({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { personaActiva } = usePersonaMayor();

  const {
    data: medication,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["medication", personaActiva?.id],
    queryFn: () => fetchMedications(personaActiva.id),
    enabled: !!personaActiva?.id,
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
          noActiveUser={!personaActiva}
          emptyCondition={
            !isLoading &&
            !isError &&
            personaActiva &&
            (!medication || medication.length === 0)
          }
          emptyDataMessage="No hay medicaciones programadas."
        >
          {medication &&
            medication.map((medicacion) => (
              <Medicacion
                key={medicacion.id}
                name={medicacion.nombre_medicacion}
                frecuency={medicacion.frecuencia}
                dosis={medicacion.dosis}
                schedules={medicacion.horarios.split(",")}
              />
            ))}
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
