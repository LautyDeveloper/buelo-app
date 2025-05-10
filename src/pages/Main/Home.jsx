import Layout from "../../components/Layout/Layout";
import ElderlyPerson from "./components/Elderly-Person/ElderlyPerson";
import MainCard from "./components/MainCard/MainCard";
import MedicineCard from "./components/Medicine-Card/Medicine-Card";
import NoteCard from "./components/Note-Card/NoteCard";
import ShiftCard from "./components/Shift-Card/ShiftCard";
import "./home.css";

export default function Home() {
  return (
    <Layout page={"DashBoard"}>
      <ElderlyPerson />
      <div className="content-container">
        <MainCard
          title={"Turnos Proximos"}
          phrase={"Citas medicas programadas"}
          backColor={"#D0E6FF"}
          textColor={"#0051AF"}
          labelButton={"Ver todos los Turnos"}
        >
          <ShiftCard />
        </MainCard>

        <MainCard
          title={"Medicacion de Hoy"}
          phrase={"Citas medicas programadas"}
          backColor={"#D6F5E3"}
          textColor={"#26AA5D"}
          labelButton={"Ver todas las Medicinas"}
        >
          <MedicineCard />
        </MainCard>

        <MainCard
          title={"Notas Familiares"}
          phrase={"Citas medicas programadas"}
          backColor={"#E8DEFF"}
          textColor={"#6D33F3"}
          labelButton={"Ver todas las Notas"}
        >
          <NoteCard />
        </MainCard>
      </div>
    </Layout>
  );
}
