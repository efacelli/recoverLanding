export function Hero() {
  return (
    <section id="top" className="hero diagonal-bottom">
      <img src="/hero-sprint.jpg" alt="Entrenamiento funcional en RECOVER, centro de kinesiologia en Santiago del Estero" className="hero__image" />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">Centro de rehabilitacion y readaptacion fisica</p>
        <h1 className="display hero__title">
          Te ayudamos<br />a moverte mejor
        </h1>
        <p className="hero__subtitle">
          Evaluamos, tratamos y acompañamos tu recuperacion con un plan de tratamiento
          100% personalizado segun tu caso y tus necesidades.
        </p>
        <div className="hero__actions">
          <a href="#servicios" className="btn btn-primary">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
