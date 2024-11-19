import React from "react";
import "./Blog.css"; // Asegúrate de que estás importando el CSS correspondiente si tienes uno aparte

const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-post">
        <h2>Consejos de Limpieza</h2>
        <p>
        Los consejos de limpieza en un blog son recomendaciones prácticas y útiles para mantener espacios limpios y ordenados. Pueden incluir trucos para limpiar diferentes superficies, elegir los productos adecuados, y técnicas para organizar eficientemente. Estos consejos ayudan a las personas a mantener sus hogares o lugares de trabajo más higiénicos de manera fácil y accesible, brindando soluciones tanto para tareas diarias como para problemas de limpieza más complejos.
        </p>
        <a href="/post/crear-pagina-react">Leer más</a>
      </div>
      <div className="blog-post">
        <h2>Beneficios de la limpieza profesional</h2>
        <p>
        Explicar por qué es importante contratar servicios de limpieza especializados.
        Diferenciar entre los servicios de limpieza doméstica y comercial.
        Los beneficios de tener un espacio limpio para la salud y el bienestar.
        </p>
        <a href="/post/mejores-practicas-web">Leer más</a>
      </div>
      <div className="blog-post">
        <h2>Historias de clientes satisfechos</h2>
        <p>
          
La historia de clientes satisfechos en un blog de servicios de limpieza es una sección donde se destacan testimonios y experiencias positivas de personas o empresas que han utilizado tus servicios. Se centra en cómo tu empresa resolvió sus necesidades de limpieza, mejoró su espacio, y proporcionó un servicio de calidad. Estas historias pueden incluir detalles sobre el tipo de limpieza realizada, el impacto en el ambiente, y la satisfacción general de los clientes. El objetivo es generar confianza y mostrar la efectividad de tus servicios mediante ejemplos reales.
        </p>
        <a href="/post/introduccion-flexbox">Leer más</a>
      </div>
    </div>
  );
};

export default Blog;
