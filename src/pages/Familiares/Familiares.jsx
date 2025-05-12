import "./familiares.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import Familiar from "./components/Familiar/Familiar.jsx";
export default function Familiares() {
  return (
    <Layout>
      <SectionsHeader
        title={"Familiares Vinculados"}
        label={"Agregar un Familiar"}
      />
      <div className="familiares-container">
        <Familiar name={"Lautaro Aquino"} />
        <Familiar name={"Maximiliano Aquino"} />
        <Familiar name={"Yael Aquino"} />
      </div>
    </Layout>
  );
}
