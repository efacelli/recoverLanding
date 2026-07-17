const EQUIPO = [
  { nombre: 'Ignacio', foto: 'foto-ignacio.jpg', rol: 'Lic. en Kinesiologia y Fisiatria', matricula: 'Matricula N.° ----' },
  { nombre: 'Mariano', foto: 'foto-mariano.jpg', rol: 'Lic. en Kinesiologia y Fisiatria', matricula: 'Matricula N.° ----' },
  { nombre: 'Tobias', foto: 'foto-tobias.jpg', rol: 'Lic. en Kinesiologia y Fisiatria', matricula: 'Matricula N.° ----' },
  { nombre: 'Antonella', foto: 'foto-antonella.jpg', rol: 'Lic. en Kinesiologia y Fisiatria', matricula: 'Matricula N.° ----' },
];

export function Team() {
  return (
    <section id="equipo" className="section team">
      <div className="container">
        <h2 className="display team__title">Nuestro Equipo</h2>

        <div className="team__grid">
          {EQUIPO.map((persona) => (
            <article className="team-card" key={persona.nombre}>
              <div className="team-card__photo">
                <img src={`/equipo/${persona.foto}`} alt={persona.nombre} loading="lazy" />
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
