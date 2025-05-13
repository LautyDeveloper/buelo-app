import Layout from "../../components/Layout/Layout";
import ElderlyPerson from "./components/Elderly-Person/ElderlyPerson";
import MainCard from "./components/MainCard/MainCard";
import MedicineCard from "./components/Medicine-Card/Medicine-Card";
import NoteCard from "./components/Note-Card/NoteCard";
import ShiftCard from "./components/Shift-Card/ShiftCard";
import "./home.css";

export default function Home({ theme, setTheme }) {
  return (
    <Layout page={"DashBoard"} theme={theme} setTheme={setTheme}>
      <ElderlyPerson />
      <div className="content-container">
        <MainCard
          title={"Turnos Proximos"}
          phrase={"Citas medicas programadas"}
          backColor={"var(--shiftsBackgrounColor)"}
          textColor={"var(--shiftsFontColor)"}
          labelButton={"Ver todos los Turnos"}
          url={"/turnos"}
        >
          <ShiftCard />
        </MainCard>

        <MainCard
          title={"Medicacion de Hoy"}
          phrase={"Citas medicas programadas"}
          backColor={"var(--medicineBackgroundColor)"}
          textColor={"var(--medicineFontColor)"}
          labelButton={"Ver todas las Medicinas"}
        >
          <MedicineCard />
        </MainCard>

        <MainCard
          title={"Notas Familiares"}
          phrase={"Citas medicas programadas"}
          backColor={"var(--notesBackgroundColor)"}
          textColor={"var(--notesFontColor)"}
          labelButton={"Ver todas las Notas"}
          url={"/notas"}
        >
          <NoteCard />
        </MainCard>
      </div>
    </Layout>
  );
}
