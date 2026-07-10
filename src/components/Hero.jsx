export function Hero() {
  return (
    <section id="top" className="hero diagonal-bottom">
      <img src="/hero-sprint.jpg" alt="Entrenamiento funcional en RECOVER, centro de kinesiologia en Santiago del Estero" className="hero__image" />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">Kinesiologia y readaptacion fisica</p>
        <h1 className="display hero__title">
          Te ayudamos<br />a moverte mejor
        </h1>
        <p className="hero__subtitle">
          Evaluamos, tratamos y acompañamos tu recuperacion con un plan de tratamiento
          100% personalizado segun tu caso y tus necesidades.
        </p>
        <div className="hero__actions">
          <a href="https://wa.me/543854735740" className="btn btn-primary">
            Reservar evaluacion
          </a>
          <a href="#servicios" className="btn btn-ghost hero__ghost">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
