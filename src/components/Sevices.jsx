function Services() {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h2>SERVICIOS INTEGRADOS</h2>
        <p>
          Limpieza y Desinfección | Mantenimiento Técnico | Jardinería y Piscinas
        </p>
      </div>

      {/* Bloque de Limpieza y Desinfección */}
      <div className="cleaning-block">
        <div className="cleaning">
          <h3>Limpieza y Desinfección</h3>
          <p>
            Que todo esté limpio, en orden, cuidado y seguro. <br />
            Entrar a tu portal y que huela bien, subir en el ascensor
            sabiendo que está desinfectado, ver cada día que alguien cuida
            los detalles por ti. Porque tu espacio, ya sea donde vives o
            trabajas, nos importa y queremos que te sientas bien y en casa.
          </p>
        </div>
        <img
          src="/src/assets/labor.jpg"
          alt="Persona limpiando y desinfectando"
          className="services-img-small"
        />
      </div>

      {/* Bloque de Jardinería y Piscinas */}
      <div className="jardines-block">
        <img
          src="/src/assets/jardineria.jpg"
          alt="Persona cuidando jardines y piscinas"
          className="services-img-small"
        />
        <div className="jardines">
          <h3>Jardines y Piscinas</h3>
          <p>
            Si hay algo de lo que disfrutar y presumir en un residencial,
            son sus zonas ajardinadas y su piscina. Si hay algo que marca
            la diferencia, son unos jardines bien cuidados y una piscina
            en perfecto estado para el baño. <br />
            Asomarse a la terraza y ver que todo está bien y en orden: ese
            es el principal empeño de los profesionales de Labordequipo.
            Por eso, esto es lo que mejor habla de tu residencial.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
