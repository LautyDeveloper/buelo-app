export function AddShiftForm() {
  return (
    <form action="">
      <div className="input-container">
        <label htmlFor="">Nombre del Consultorio / Hospital</label>
        <input type="text" />
      </div>

      <div className="horizontal-inputs-container">
        <div className="input-container">
          <label htmlFor="">Dia</label>
          <input type="text" />
        </div>

        <div className="input-container">
          <label htmlFor="">Horario</label>
          <input type="text" />
        </div>
      </div>

      <div className="input-container">
        <label htmlFor="">Nombre del Profesional</label>
        <input type="text" />
      </div>
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
