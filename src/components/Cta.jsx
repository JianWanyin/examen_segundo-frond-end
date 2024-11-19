function Cta() {
  const handleSolicitarEstudio = () => {
    alert(
      "Gracias por solicitar un estudio personalizado. Nos pondremos en contacto contigo pronto."
    );
  };

  return (
    <div className="cta" id="trabaja-con-nosotros">
      <p>
        ¿Quieres saber cómo podemos mejorar la limpieza y el mantenimiento de tu
        comunidad, oficina o comercio?
      </p>
      <h1>
        Nuestro equipo y nuestros procesos de trabajo e innovación marcan la
        diferencia.
      </h1>
      <button onClick={handleSolicitarEstudio}>
        Solicita un estudio personalizado gratis
      </button>
    </div>
  );
}

export default Cta;
