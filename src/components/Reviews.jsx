const MAPS_REVIEWS_LINK =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('RECOVER Centro de Rehabilitacion, Av. Belgrano 164, Santiago del Estero');

const RESEÑAS = [
  {
    nombre: 'Iara Basbus',
    tiempo: 'Hace 6 meses',
    texto:
      'Fui por un dolor inespecifico en el hombro y no solo solucionaron mi problema, sino que me dieron herramientas para evitar futuras dolencias. Sin duda los elegiria de nuevo porque me recupere y me enseñaron a escuchar mi cuerpo. Lugar comodo, con aire acondicionado, multiples herramientas y con kinesiologos comprometidos y muy profesionales.',
  },
  {
    nombre: 'Sergio Avila',
    tiempo: 'Hace 6 meses',
    texto:
      'Excelente. Centro de kinesiologia muy profesional, con abordaje personalizado segun la patologia del paciente. Combinan correctamente aparatologia, terapia manual y masoterapia con ejercicios terapeuticos especificos de rehabilitacion. El seguimiento durante la sesion es constante y se nota el compromiso con la recuperacion funcional. Puntuales, dedicados y con excelente trato. Muy recomendable.',
  },
  {
    nombre: 'Matias Ferrari',
    tiempo: 'Hace 2 meses',
    texto: 'Los Kine muy atentos y estan con vos en todo momento. El lugar muy comodo y todo nuevo, 100% recomendable!',
  },
];

function Stars() {
  return (
    <div className="review-card__stars" aria-label="5 de 5 estrellas">
      {'★★★★★'}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="resenas" className="section reviews">
      <div className="container">
        <p className="eyebrow reviews__eyebrow">Opiniones reales</p>
        <h2 className="display reviews__title">De nuestros pacientes</h2>

        <div className="reviews__grid">
          {RESEÑAS.map((r) => (
            <article className="review-card" key={r.nombre}>
              <Stars />
              <p className="review-card__text">{r.texto}</p>
              <div className="review-card__footer">
                <span className="review-card__name">{r.nombre}</span>
                <span className="review-card__time">{r.tiempo}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews__cta">
          <a href={MAPS_REVIEWS_LINK} target="_blank" rel="noreferrer" className="btn btn-ghost reviews__link">
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
