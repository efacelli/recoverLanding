const OBRAS_SOCIALES = [
  'SMAUNSE',
  'SancorSalud',
  'Prevencion Salud',
  'OSPE',
  'IOSEP',
  'Nobis',
  'Boreal',
  'JS Jerarquicos',
];

export function Insurances() {
  return (
    <section id="obras-sociales" className="section insurances">
      <div className="container">
        <p className="eyebrow insurances__eyebrow">Trabajamos con</p>
        <h2 className="display insurances__title">Obras sociales y prepagas</h2>

        <div className="insurances__chips">
          {OBRAS_SOCIALES.map((os) => (
            <span className="chip" key={os}>
              {os}
            </span>
          ))}
          <span className="chip chip--muted">Y demas</span>
        </div>

        <p className="insurances__note">
          ¿No encontras tu obra social en la lista? Consultanos, la mayoria de las
          coberturas tienen convenio con el centro.
        </p>
      </div>
    </section>
  );
}
