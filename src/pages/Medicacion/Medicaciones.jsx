import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import Medicacion from "./components/Medicacion/Medicacion";
import "./Medicaciones.css";

export default function Medicaciones({ theme, setTheme }) {
  return (
    <Layout theme={theme} setTheme={setTheme}>
      <SectionsHeader
        title={"Medicaciones"}
        label={"Agregar Medicacion"}
        color={"var(--medicineFontColor)"}
      />
      <div className="medicaciones-container">
        <Medicacion
          name={"Lorsatan 50mg"}
          frecuency={"Todos los Dias"}
          dosis={"2 comprimidos"}
          schedules={["15:00", "20:00"]}
        />
      </div>
    </Layout>
  );
}
