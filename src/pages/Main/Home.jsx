import Layout from "../../components/Layout/Layout";
import ElderlyPerson from "./components/Elderly-Person/ElderlyPerson";
import MainCard from "./components/MainCard/MainCard";
import MedicineCard from "./components/Medicine-Card/Medicine-Card";
import NoteCard from "./components/Note-Card/NoteCard";
import ShiftCard from "./components/Shift-Card/ShiftCard";
import { CalendarClock } from "lucide-react";
import { Pill } from "lucide-react";
import { ClipboardPenLine } from "lucide-react";
import {
  AddShiftForm,
  AddMedicineForm,
  AddNoteForm,
} from "../../components/AddForms/AddForms";
import "./home.css";
import ModalForm from "../../components/ModalForm/ModalForm";
import { useQuery } from "@tanstack/react-query";
import { fetchResumenPersona } from "../../api/resumen.js";
import { usePersonaMayor } from "../../context/PersonaMayorContext";

export default function Home({ theme, setTheme }) {
  const { personaActiva } = usePersonaMayor();

  const {
    data: resumen,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["resumen", personaActiva?.id],
    queryFn: () => fetchResumenPersona(personaActiva.id),
    enabled: !!personaActiva?.id,
  });

  return (
    <Layout page={"DashBoard"} theme={theme} setTheme={setTheme}>
      <ElderlyPerson />
      <div className="content-container">
        <MainCard
          icon={<CalendarClock />}
          title={"Turnos Proximos"}
          phrase={"Citas medicas programadas"}
          backColor={"var(--shiftsBackgrounColor)"}
          textColor={"var(--shiftsFontColor)"}
          labelButton={"Ver todos los Turnos"}
          url={"/turnos"}
          modalTitle={"Agregar Nuevo Turno"}
          modalParragraph={
            "Completa los detalles del Turno. Indicando los siguientes datos"
          }
          form={<AddShiftForm />}
        >
          {isLoading ? (
            <p>Cargando turnos...</p>
          ) : isError ? (
            <p>Error al cargar los turnos.</p>
          ) : resumen?.turnos?.length > 0 ? (
            resumen.turnos.map((turno) => (
              <ShiftCard key={turno.id} turno={turno} />
            ))
          ) : (
            <p>No hay turnos programados.</p>
          )}
        </MainCard>

        <MainCard
          icon={<Pill />}
          title={"Medicacion de Hoy"}
          phrase={"Citas medicas programadas"}
          backColor={"var(--medicineBackgroundColor)"}
          textColor={"var(--medicineFontColor)"}
          labelButton={"Ver todas las Medicinas"}
          url={"/medicacion"}
          modalTitle={"Agregar Nueva Medicacion"}
          modalParragraph={
            "Completa los detalles de la Medicacion. Indicando los siguientes datos"
          }
          form={<AddMedicineForm />}
        >
          {isLoading ? (
            <p>Cargando medicaciones...</p>
          ) : isError ? (
            <p>Error al cargar las medicaciones.</p>
          ) : resumen?.medicaciones?.length > 0 ? (
            resumen.medicaciones.map((turno) => (
              <MedicineCard key={turno.id} medicine={turno} />
            ))
          ) : (
            <p>No hay medicaciones programados.</p>
          )}
        </MainCard>

        <MainCard
          icon={<ClipboardPenLine />}
          title={"Notas Familiares"}
          phrase={"Citas medicas programadas"}
          backColor={"var(--notesBackgroundColor)"}
          textColor={"var(--notesFontColor)"}
          labelButton={"Ver todas las Notas"}
          url={"/notas"}
          modalTitle={"Agregar Nueva Nota"}
          modalParragraph={
            "Completa los detalles de la Nota. Indicando los siguientes datos"
          }
          form={<AddNoteForm />}
        >
          {isLoading ? (
            <p>Cargando notas...</p>
          ) : isError ? (
            <p>Error al cargar las notas.</p>
          ) : resumen?.notas?.length > 0 ? (
            resumen.notas.map((nota) => <NoteCard key={nota.id} note={nota} />)
          ) : (
            <p>No hay notas agregadas.</p>
          )}
        </MainCard>
      </div>
    </Layout>
  );
}
