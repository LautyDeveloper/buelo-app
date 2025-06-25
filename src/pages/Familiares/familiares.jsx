import "./familiares.css";
import Layout from "../../components/Layout/Layout.jsx";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader.jsx";
import Familiar from "./components/Familiar/familiar.jsx";
export default function Family({ theme, setTheme }) {
  return (
    <Layout theme={theme} setTheme={setTheme} page={"Familiares"}>
      <SectionsHeader
        title={"Familiares Vinculados"}
        label={"Agregar un Familiar"}
        color={"var(--familiarColor)"}
      />
      <div className="familiares-container">
        <Familiar name={"Lautaro Aquino"} />
        <Familiar name={"Maximiliano Aquino"} />
        <Familiar name={"Yael Aquino"} />
      </div>
    </Layout>
  );
}
