import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import PersonCard from "./components/MainCard/PersonCard";
import "./personas-mayores.css";

export default function PersonasMayores() {
  return (
    <Layout page={"Personas Mayores"}>
      <SectionsHeader title={"Personas Mayores"} label={"Agregar Persona"} />
      <div className="persons-container">
        <PersonCard name={"Lucrecia Bacigalupo"} familiar={"3"} age={"65"} />
        <PersonCard name={"Gladys Marinatto"} familiar={"4"} age={"81"} />
        <PersonCard name={"Santiago Aquino"} familiar={"3"} age={"70"} />
        <PersonCard name={"Jose Fedriani"} familiar={"4"} age={"85"} />
      </div>
    </Layout>
  );
}
