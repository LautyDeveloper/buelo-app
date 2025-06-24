// src/pages/Main/Home.jsx
import Layout from "../../components/Layout/Layout";
import ElderlyPerson from "./components/Elderly-Person/ElderlyPerson";
import MainCard from "./components/MainCard/MainCard";
import MedicineCard from "./components/Medicine-Card/Medicine-Card";
import NoteCard from "./components/Note-Card/NoteCard";
import ShiftCard from "./components/Shift-Card/ShiftCard";
import { CalendarClock, Pill, ClipboardPenLine } from "lucide-react"; // Combined imports
import {
  AddShiftForm,
  AddMedicineForm,
  AddNoteForm,
} from "../../components/AddForms/AddForms";
import "./home.css";
// ModalForm is not used directly here anymore for data display, can be removed if not used by AddForms directly in modals
// import ModalForm from "../../components/ModalForm/ModalForm";
import { useQuery } from "@tanstack/react-query";
import { fetchPersonSummary } from "../../api/summary.js";
import { useElderlyPerson } from "../../context/ElderlyPersonContext.jsx";
import StatusDisplay from "../../components/StatusDisplay/StatusDisplay";

export default function Home({ theme, setTheme }) {
  const { activePerson } = useElderlyPerson();

  const {
    data: summary,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["summary", activePerson?.id],
    queryFn: () => fetchPersonSummary(activePerson.id),
    enabled: !!activePerson?.id,
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
          <StatusDisplay
            isLoading={isLoading}
            isError={isError}
            error={error}
            noActiveUser={!activePerson}
            emptyCondition={
              !isLoading &&
              !isError &&
              activePerson &&
              (!summary?.turnos || summary.turnos.length === 0)
            }
            noActiveUserMessage="Seleccioná una persona mayor para ver sus turnos."
            emptyDataMessage="No hay turnos programados."
            // loadingMessage="Cargando turnos..." // Custom message if needed
          >
            {summary?.turnos?.map(
              (
                turno // Check resumen.turnos before mapping
              ) => (
                <ShiftCard key={turno.id} turno={turno} />
              )
            )}
          </StatusDisplay>
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
          <StatusDisplay
            isLoading={isLoading}
            isError={isError}
            error={error}
            noActiveUser={!activePerson}
            emptyCondition={
              !isLoading &&
              !isError &&
              activePerson &&
              (!summary?.medicaciones || summary.medicaciones.length === 0)
            }
            noActiveUserMessage="Seleccioná una persona mayor para ver sus medicaciones."
            emptyDataMessage="No hay medicaciones programadas."
          >
            {summary?.medicaciones?.map((medicacion) => (
              <MedicineCard key={medicacion.id} medicine={medicacion} />
            ))}
          </StatusDisplay>
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
          <StatusDisplay
            isLoading={isLoading}
            isError={isError}
            error={error}
            noActiveUser={!activePerson}
            emptyCondition={
              !isLoading &&
              !isError &&
              activePerson &&
              (!summary?.notas || summary.notas.length === 0)
            }
            noActiveUserMessage="Seleccioná una persona mayor para ver sus notas."
            emptyDataMessage="No hay notas agregadas."
          >
            {summary?.notas?.map((nota) => (
              <NoteCard key={nota.id} note={nota} />
            ))}
          </StatusDisplay>
        </MainCard>
      </div>
    </Layout>
  );
}
