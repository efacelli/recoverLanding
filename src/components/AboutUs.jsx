const PRINCIPIOS = [
  {
    titulo: 'Mision',
    texto: 'Ayudar a cada paciente a recuperarse y a moverse mejor, con un tratamiento pensado para su caso puntual.',
  },
  {
    titulo: 'Vision',
    texto: 'Ser el centro de referencia en kinesiologia y readaptacion fisica de Santiago del Estero.',
  },
  {
    titulo: 'Valores',
    texto: 'Compromiso, trato cercano y actualizacion profesional constante en cada sesion.',
  },
];

export function AboutUs() {
  return (
    <section id="quienes-somos" className="section about">
      <div className="container">
        <h2 className="display about__title">Quienes Somos</h2>

        <p className="about__intro">
          RECOVER es un centro de kinesiologia y readaptacion fisica en Santiago del
          Estero Capital. Combinamos evaluacion funcional, terapia manual y ejercicio
          terapeutico para que cada paciente entienda su lesion y participe activamente
          de su propio proceso de recuperacion.
        </p>

        <div className="about__grid">
          {PRINCIPIOS.map((p) => (
            <div className="about-card" key={p.titulo}>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
