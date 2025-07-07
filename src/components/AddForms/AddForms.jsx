import { useState } from "react";
import { useElderlyPerson } from "../../context/ElderlyPersonContext";
import { useShiftsMutations } from "../../hooks/useShiftsMutations"; // Import the custom hook
import { useNotification } from "../../context/NotificationContext"; // Import useNotification
import { useMedicationsMutations } from "../../hooks/useMedicationsMutations";

export function AddShiftForm({ onSuccess }) {
  const { activePerson } = useElderlyPerson();
  const { addShiftMutation } = useShiftsMutations(); // Get the mutation from the hook
  const { addNotification } = useNotification(); // Get addNotification

  const [formData, setFormData] = useState({
    lugar: "",
    dia: "",
    hora: "",
    profesional: "",
    especialidad: "",
  });

  // The useMutation call is now inside useShiftsMutations hook
  // The onSuccess for invalidation is handled there.
  // The component-specific onSuccess (to close modal) is passed to mutate.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!activePerson) return;

    addShiftMutation.mutate(
      {
        ...formData,
        persona_mayor_id: activePerson.id,
      },
      {
        onSuccess: () => {
          if (onSuccess) onSuccess(); // Call the original onSuccess (e.g., to close modal)
        },
        onError: (error) => {
          console.error("Error creating shift:", error);
          addNotification(
            `Error creating shift: ${error.message || "Please try again."}`,
            "error"
          );
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Nombre del Consultorio / Hospital</label>
        <input
          type="text"
          name="lugar"
          value={formData.lugar}
          onChange={handleChange}
        />
      </div>

      <div className="horizontal-inputs-container">
        <div className="input-container">
          <label>Día</label>
          <input
            type="date"
            name="dia"
            value={formData.dia}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label>Horario</label>
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-container">
        <label>Nombre del Profesional</label>
        <input
          type="text"
          name="profesional"
          value={formData.profesional}
          onChange={handleChange}
        />
      </div>

      <div className="input-container">
        <label>Especialidad</label>
        <input
          type="text"
          name="especialidad"
          value={formData.especialidad}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Agregar Turno</button>
    </form>
  );
}

export function AddMedicineForm() {
  const { activePerson } = useElderlyPerson();
  const { addMedicationMutarion } = useMedicationsMutations();
  const { addNotification } = useNotification();
  return (
    <form action="">
      <div className="input-container">
        <label htmlFor="">Nombre del Medicamento</label>
        <input type="text" />
      </div>

      <div className="horizontal-inputs-container">
        <div className="input-container">
          <label htmlFor="">Dosis</label>
          <input type="text" />
        </div>

        <div className="input-container">
          <label htmlFor="">Frecuencia</label>
          <input type="text" />
        </div>
      </div>

      <div className="input-container">
        <label htmlFor="">Horarios</label>
        <input type="text" />
      </div>

      <div className="input-container">
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
}

export function AddNoteForm() {
  return (
    <form action="">
      <div className="input-container">
        <label htmlFor="">Titulo de la Nota</label>
        <input type="text" />
      </div>

      <div className="input-container">
        <label htmlFor="">Cuerpo de la Nota</label>
        <input type="text" />
      </div>
    </form>
  );
}

export function AddElderlyPersonForm() {
  return (
    <form action="">
      <div className="input-container">
        <label htmlFor="">Titulo de la Nota</label>
        <input type="text" />
      </div>

      <div className="input-container">
        <label htmlFor="">Cuerpo de la Nota</label>
        <input type="text" />
      </div>
    </form>
  );
}
