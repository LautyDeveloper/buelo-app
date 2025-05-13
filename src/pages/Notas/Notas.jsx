import "./notas.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import Nota from "./components/Nota/Nota";

export default function Notas({ theme, setTheme }) {
  return (
    <Layout theme={theme} setTheme={setTheme}>
      <SectionsHeader
        title={"Notas Familiares"}
        label={"Añadir un Nota"}
        color={"var(--notesFontColor)"}
      />
      <div className="notas-container">
        <Nota
          title={"Revisar la Presion"}
          date={"05 de Mayo"}
          time={"18:23hs"}
          note={
            "Tenemos que revisarle la Presion antes del turno con el cardiologo. Anotarlo en el papel"
          }
        />
        <Nota
          title={"Revisar la Presion"}
          date={"05 de Mayo"}
          time={"18:23hs"}
          note={
            "Tenemos que revisarle la Presion antes del turno con el cardiologo. Anotarlo en el papel"
          }
        />
        <Nota
          title={"Revisar la Presion"}
          date={"05 de Mayo"}
          time={"18:23hs"}
          note={
            "Tenemos que revisarle la Presion antes del turno con el cardiologo. Anotarlo en el papel"
          }
        />
        <Nota
          title={"Revisar la Presion"}
          date={"05 de Mayo"}
          time={"18:23hs"}
          note={
            "Tenemos que revisarle la Presion antes del turno con el cardiologo. Anotarlo en el papel"
          }
        />
      </div>
    </Layout>
  );
}
