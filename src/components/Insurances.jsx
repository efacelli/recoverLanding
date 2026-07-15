const OBRAS_SOCIALES = [
  { slug: 'smaunse', nombre: 'SMAUNSE' },
  { slug: 'sancorsalud', nombre: 'SancorSalud' },
  { slug: 'prevencion-salud', nombre: 'Prevencion Salud' },
  { slug: 'ospe', nombre: 'OSPE' },
  { slug: 'iosep', nombre: 'IOSEP' },
  { slug: 'nobis', nombre: 'Nobis' },
  { slug: 'boreal', nombre: 'Boreal' },
  { slug: 'js-jerarquicos', nombre: 'JS Jerarquicos' },
];

export function Insurances() {
  return (
    <section id="obras-sociales" className="section insurances">
      <div className="container">
        <p className="eyebrow insurances__eyebrow">Trabajamos con</p>
        <h2 className="display insurances__title">Obras sociales y prepagas</h2>

        <div className="insurances__logos">
          {OBRAS_SOCIALES.map((os) => (
            <div className="insurance-logo" key={os.slug}>
              <img src={`/obras-sociales/${os.slug}.png`} alt={os.nombre} loading="lazy" />
            </div>
          ))}
        </div>

        <p className="insurances__note">
          ¿No encontras tu obra social en la lista? Consultanos, la mayoria de las
          coberturas tienen convenio con el centro.
        </p>
      </div>
    </section>
  );
}
