const EQUIPO = [
  { nombre: 'Ignacio', rol: 'Lic. en Kinesiologia y Fisiatria', matricula: 'Matricula N.° ----' },
  { nombre: 'Mariano', rol: 'Lic. en Kinesiologia y Fisiatria', matricula: 'Matricula N.° ----' },
  { nombre: 'Tobias', rol: 'Lic. en Kinesiologia y Fisiatria', matricula: 'Matricula N.° ----' },
  { nombre: 'Antonella', rol: 'Lic. en Kinesiologia y Fisiatria', matricula: 'Matricula N.° ----' },
];

export function Team() {
  return (
    <section id="equipo" className="section team">
      <div className="container">
        <h2 className="display team__title">Nuestro Equipo</h2>

        <div className="team__grid">
          {EQUIPO.map((persona) => (
            <article className="team-card" key={persona.nombre}>
              <div className="team-card__photo" aria-hidden="true">
                <span>{persona.nombre[0]}</span>
              </div>
              <h3 className="team-card__name">{persona.nombre}</h3>
              <p className="team-card__role">{persona.rol}</p>
              <p className="team-card__matricula">{persona.matricula}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
