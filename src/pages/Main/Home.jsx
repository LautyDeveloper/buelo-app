import Layout from "../../components/Layout/Layout";
import ElderlyPerson from "./components/Elderly-Person/ElderlyPerson";
import MainCard from "./components/MainCard/MainCard";
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
          <ShiftCard backColor={"#D0E6FF"} textColor={"#0051AF"} />
        </MainCard>
      </div>
    </Layout>
  );
}
