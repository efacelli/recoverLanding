const DIRECCION = 'Av. Belgrano (N) 164, Santiago del Estero Capital';
const MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  DIRECCION + ', Santiago del Estero, Argentina'
)}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  DIRECCION + ', Santiago del Estero, Argentina'
)}`;

export function Location() {
  return (
    <section id="ubicacion" className="section location diagonal-top">
      <div className="container location__grid">
        <div className="location__info">
          <p className="eyebrow">Encontranos</p>
          <h2 className="display location__title">Visitanos</h2>
          <p className="location__address">{DIRECCION}</p>
          <p className="location__text">
            Coordina tu evaluacion inicial y empeza tu tratamiento con un plan
            pensado especificamente para vos.
          </p>
          <a className="btn btn-primary" href={MAPS_LINK} target="_blank" rel="noreferrer">
            Como llegar
          </a>
        </div>

        <div className="location__map">
          <iframe
            title="Ubicacion de RECOVER en el mapa"
            src={MAPS_EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="location__strip">
        <img src="/training-strength-banner.jpg" alt="Rehabilitacion traumato-deportiva y entrenamiento de fuerza en RECOVER" />
      </div>
    </section>
  );
}
