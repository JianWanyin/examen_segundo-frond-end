import { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    aceptaPolitica: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulario enviado exitosamente.");
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="form-section" id="contacto">
      <h2>Consigue tu estudio personalizado gratis</h2>
      <p>Para tu comunidad de vecinos, negocio, oficina, garaje o vivienda</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          required
          value={formData.mensaje}
          onChange={handleInputChange}
        ></textarea>

        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="aceptaPolitica"
              checked={formData.aceptaPolitica}
              onChange={handleInputChange}
              required
            />
            He leído y acepto la política de privacidad
          </label>
        </div>
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default Contacto;
