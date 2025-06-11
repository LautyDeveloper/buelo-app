import { AddMedicineForm } from "../../components/AddForms/AddForms";
import Layout from "../../components/Layout/Layout";
import ModalForm from "../../components/ModalForm/ModalForm";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import useModal from "../../hooks/useModal";
import Medicacion from "./components/Medicacion/Medicacion";
import "./Medicaciones.css";
import { useQuery } from "@tanstack/react-query";
import { fetchMedicaciones } from "../../api/medicaciones";
export default function Medicaciones({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();

  const {
    data: medicaciones,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["medicaciones"],
    queryFn: fetchMedicaciones,
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
        {isLoading && <p>Cargando turnos...</p>}
        {isError && <p>Hubo un error al cargar los turnos.</p>}
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
