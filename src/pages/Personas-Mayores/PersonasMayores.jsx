import Layout from "../../components/Layout/Layout";
import SectionsHeader from "../../components/Sections-Header/SectionsHeader";
import PersonCard from "./components/MainCard/PersonCard";
import useModal from "../../hooks/useModal";
import ModalForm from "../../components/ModalForm/ModalForm";
import "./personas-mayores.css";
import { AddElderlyPersonForm } from "../../components/AddForms/AddForms";
import { useQuery } from "@tanstack/react-query";
import { fetchPersons } from "../../api/personas";

export default function PersonasMayores({ theme, setTheme }) {
  const { isOpen, openModal, closeModal } = useModal();

  const {
    data: persons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["persons"],
    queryFn: fetchPersons,
  });

  return (
    <Layout page={"Personas Mayores"} theme={theme} setTheme={setTheme}>
      <SectionsHeader
        title={"Personas Mayores"}
        label={"Agregar Persona"}
        color={"var(--elderlyPersonColor)"}
        openModal={openModal}
      />
      <div className="persons-container">
        {isLoading && <p className="loading">Cargando Personas...</p>}
        {isError && (
          <p className="error">Hubo un error al cargar las personas.</p>
        )}
        {persons &&
          persons.map((person) => {
            return (
              <PersonCard
                key={person.id}
                name={person.nombre}
                familiar={person.cantidad_familiares}
                age={person.edad}
                dni={person.dni}
                nTramite={person.numero_tramite}
                nAfiliado={
                  person.numero_afiliado ? person.numero_afiliado : "No Tiene"
                }
                os={person.obra_social ? person.obra_social : "No Tiene"}
              />
            );
          })}
      </div>
      <ModalForm
        title={"Agregar Nueva Persona"}
        parragraph={
          "Completa los datos de tu Persona Mayor, y empeza a gestionar su vida mucho mas facil"
        }
        isOpen={isOpen}
        onClose={closeModal}
      >
        <AddElderlyPersonForm />
      </ModalForm>
    </Layout>
  );
}
