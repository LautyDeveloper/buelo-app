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

export default function Home({ theme, setTheme }) {
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
          form={<AddShiftForm />}
        >
          <ShiftCard />
        </MainCard>

        <MainCard
          icon={<Pill />}
          title={"Medicacion de Hoy"}
          phrase={"Citas medicas programadas"}
          backColor={"var(--medicineBackgroundColor)"}
          textColor={"var(--medicineFontColor)"}
          labelButton={"Ver todas las Medicinas"}
          form={<AddMedicineForm />}
        >
          <MedicineCard />
        </MainCard>

        <MainCard
          icon={<ClipboardPenLine />}
          title={"Notas Familiares"}
          phrase={"Citas medicas programadas"}
          backColor={"var(--notesBackgroundColor)"}
          textColor={"var(--notesFontColor)"}
          labelButton={"Ver todas las Notas"}
          url={"/notas"}
        >
          <NoteCard />
          <ModalForm>
            <AddNoteForm />
          </ModalForm>
        </MainCard>
      </div>
    </Layout>
  );
}
