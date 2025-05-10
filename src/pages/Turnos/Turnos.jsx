import "./turnos.css";
import Layout from "../../components/Layout/Layout";
import SectionsHeaders from "../../components/Sections-Header/SectionsHeader";
import Turno from "./components/Turno/Turno";

export default function Turnos() {
  return (
    <Layout>
      <SectionsHeaders title={"Turnos Medicos"} label={"Agregar Turno"} />
      <div className="turnos-container">
        <Turno
          date={"12 de Mayo"}
          time={"15:00hs"}
          especiality={"Medico Clinico"}
          profesional={"Dr. Suarez"}
          spot={"Hospital Evita"}
        />
        <Turno
          date={"12 de Mayo"}
          time={"15:00hs"}
          especiality={"Medico Clinico"}
          profesional={"Dr. Suarez"}
          spot={"Hospital Evita"}
        />
        <Turno
          date={"12 de Mayo"}
          time={"15:00hs"}
          especiality={"Medico Clinico"}
          profesional={"Dr. Suarez"}
          spot={"Hospital Evita"}
        />
        <Turno
          date={"12 de Mayo"}
          time={"15:00hs"}
          especiality={"Medico Clinico"}
          profesional={"Dr. Suarez"}
          spot={"Hospital Evita"}
        />
      </div>
    </Layout>
  );
}
