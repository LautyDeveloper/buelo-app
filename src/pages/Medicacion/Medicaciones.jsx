// src/pages/Medicacion/Medicaciones.jsx
import { AddMedicineForm } from "../../components/AddForms/AddForms";
import Layout from "../../components/Layout/Layout";
import ModalForm from "../../components/ModalForm/ModalForm";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import useModal from "../../hooks/useModal";
import Medicacion from "./components/Medicacion/Medicacion";
import "./Medicaciones.css";
import { useElderlyPerson } from "../../context/ElderlyPersonContext.jsx";
import StatusDisplay from "../../components/StatusDisplay/StatusDisplay";
import { useNotification } from "../../context/NotificationContext.jsx";
import { useMedicationsQuery } from "../../hooks/useMedicationsQuery.js";
import { useMedicationsMutations } from "../../hooks/useMedicationsMutations.js";
import { useConfirmationModal } from "../../context/ConfirmationModalContext.jsx";

export default function Medicaciones({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { activePerson } = useElderlyPerson();
  const { addNotification } = useNotification();
  const { showConfirmation } = useConfirmationModal(); // Get showConfirmation

  const {
    data: medications,
    isLoading,
    isError,
    error,
  } = useMedicationsQuery(activePerson?.id);

  const { deleteMedicationMutation } = useMedicationsMutations();

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
                  onDelete={async () => {
                    // Make onDelete async
                    const confirmed = await showConfirmation({
                      title: "Borrar Medicacion",
                      message: `¿Estás seguro de que quieres borrar la medicación "${medication.nombre_medicacion}"?`,
                      confirmText: "Borrar",
                      cancelText: "Cancelar",
                    });

                    if (confirmed) {
                      deleteMedicationMutation.mutate(medication.id, {
                        onError: (err) => {
                          // Success notification is handled by the hook
                          console.error("Error deleting medication:", err);
                          addNotification(
                            `Error deleting medication: ${
                              err.message || "Please try again."
                            }`,
                            "error"
                          );
                        },
                      });
                    } else {
                      addNotification("Deletion cancelled.", "info");
                    }
                  }}
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
