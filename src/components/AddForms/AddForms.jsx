import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addShift } from "../../api/shifts"; // tu función POST al backend
import { useElderlyPerson } from "../../context/ElderlyPersonContext";

export function AddShiftForm({ onSuccess }) {
  const { activePerson } = useElderlyPerson();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    lugar: "",
    dia: "",
    hora: "",
    profesional: "",
    especialidad: "",
  });

  const mutation = useMutation({
    mutationFn: addShift,
    onSuccess: () => {
      queryClient.invalidateQueries(["shifts", activePerson.id]);
      if (onSuccess) onSuccess(); // Para cerrar el modal
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!activePerson) return;

    mutation.mutate({
      ...formData,
      persona_mayor_id: activePerson.id,
    });
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
