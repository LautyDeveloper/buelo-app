import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import "./Medicaciones.css";

export default function Medicaciones({ theme, setTheme }) {
  return (
    <Layout theme={theme} setTheme={setTheme}>
      <SectionsHeader
        title={"Medicaciones"}
        label={"Agregar Medicacion"}
        color={"var(--medicineFontColor)"}
      />
      <div className="medicaciones-container"></div>
    </Layout>
  );
}
