import { AddMedicineForm } from "../../components/AddForms/AddForms";
import Layout from "../../components/Layout/Layout";
import ModalForm from "../../components/ModalForm/ModalForm";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import useModal from "../../hooks/useModal";
import Medicacion from "./components/Medicacion/Medicacion";
import "./Medicaciones.css";
import { useQuery } from "@tanstack/react-query";
import { fetchMedicaciones } from "../../api/medicaciones";
import { usePersonaMayor } from "../../context/PersonaMayorContext";
export default function Medicaciones({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { personaActiva } = usePersonaMayor();

  const {
    data: medicaciones,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["medicaciones", personaActiva?.id],
    queryFn: () => fetchMedicaciones(personaActiva.id),
    enabled: !!personaActiva?.id, // Solo se ejecuta si hay una persona activa
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
        {isLoading && <p className="loading">Cargando turnos...</p>}
        {isError && (
          <p className="error">Hubo un error al cargar los turnos.</p>
        )}
        {personaActiva === null && (
          <p className="error">
            No hay persona activa. Por favor, seleccioná una persona mayor.
          </p>
        )}
        {medicaciones &&
          medicaciones.map((medicacion) => (
            <Medicacion
              name={medicacion.nombre_medicacion}
              frecuency={medicacion.frecuencia}
              dosis={medicacion.dosis}
              schedules={medicacion.horarios.split(",")}
            />
          ))}
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
