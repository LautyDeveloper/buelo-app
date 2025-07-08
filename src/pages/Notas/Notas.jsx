// src/pages/Notas/Notas.jsx
import "./notas.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import Nota from "./components/Nota/Nota";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import { AddNoteForm } from "../../components/AddForms/AddForms";
import { formatDateTime } from "../../utils/formatDateTime";
import { useElderlyPerson } from "../../context/ElderlyPersonContext.jsx";
import StatusDisplay from "../../components/StatusDisplay/StatusDisplay";
import { useNotesQuery } from "../../hooks/useNotesQuery"; // Import the new query hook
import { useNotesMutations } from "../../hooks/useNotesMutations.js";
import { useNotification } from "../../context/NotificationContext.jsx";
import { useConfirmationModal } from "../../context/ConfirmationModalContext.jsx";
export default function Notas({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { activePerson } = useElderlyPerson();

  const { addNotification } = useNotification(); // Get addNotification
  const { showConfirmation } = useConfirmationModal(); // Get showConfirmation

  // Use the custom hook to fetch shifts
  const {
    data: notes,
    isLoading,
    isError,
    error,
  } = useNotesQuery(activePerson?.id);

  const { deleteNoteMutation } = useNotesMutations();

  return (
    <Layout theme={theme} setTheme={setTheme} page={"Notas"}>
      <SectionsHeader
        title={"Notas Familiares"}
        label={"Añadir un Nota"}
        color={"var(--notesFontColor)"}
        openModal={openModal}
      />
      <div className="notas-container">
        <StatusDisplay
          isLoading={isLoading}
          isError={isError}
          error={error}
          noActiveUser={!activePerson}
          emptyCondition={
            !isLoading &&
            !isError &&
            activePerson &&
            (!notes || notes.length === 0)
          }
          emptyDataMessage="No hay notas agregadas."
        >
          {notes &&
            notes.map((note) => {
              const { date, time } = formatDateTime(note.fecha_hora);
              return (
                <Nota
                  key={note.id}
                  title={note.titulo}
                  date={date}
                  time={time}
                  note={note.cuerpo}
                  onDelete={async () => {
                    // Make onDelete async
                    const confirmed = await showConfirmation({
                      title: "Borrar Nota",
                      message: `¿Estás seguro de que quieres borrar la nota "${note.titulo}"?`,
                      confirmText: "Borrar",
                      cancelText: "Cancelar",
                    });

                    if (confirmed) {
                      deleteNoteMutation.mutate(note.id, {
                        onError: (err) => {
                          // Success notification is handled by the hook
                          console.error("Error deleting note:", err);
                          addNotification(
                            `Error deleting shift: ${
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
