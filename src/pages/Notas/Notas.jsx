import "./notas.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import Nota from "./components/Nota/Nota";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import { AddNoteForm } from "../../components/AddForms/AddForms";
import { useQuery } from "@tanstack/react-query";
import { fetchNotas } from "../../api/notas";
import { formatDateTime } from "../../utils/formatDateTime";

export default function Notas({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();

  const {
    data: notes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["turnos"],
    queryFn: fetchNotas,
  });

  return (
    <Layout theme={theme} setTheme={setTheme} page={"Notas"}>
      <SectionsHeader
        title={"Notas Familiares"}
        label={"Añadir un Nota"}
        color={"var(--notesFontColor)"}
        openModal={openModal}
      />
      <div className="notas-container">
        {isLoading && <p>Cargando Notas...</p>}
        {isError && <p>Hubo un error al cargar las notas.</p>}
        {notes &&
          notes.map((note) => {
            const { date, time } = formatDateTime(note.fecha_hora);

            <Nota
              key={note.id}
              title={note.titulo}
              date={date}
              time={time}
              note={note.cuerpo}
            />;
          })}
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
