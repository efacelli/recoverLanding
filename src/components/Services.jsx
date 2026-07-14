import { WHATSAPP_LINK } from '../whatsapp';

const SERVICIOS = [
  {
    titulo: 'Evaluacion Kinesica Inicial',
    texto: 'Un diagnostico funcional completo para entender tu lesion y armar el plan indicado desde el primer dia.',
  },
  {
    titulo: 'Prevencion De Lesiones',
    texto: 'Trabajamos sobre los puntos debiles antes de que se conviertan en una lesion.',
  },
  {
    titulo: 'Rehabilitacion Traumato-Deportiva',
    texto: 'Recuperacion de lesiones musculares, articulares y post-quirurgicas con seguimiento kinesico.',
  },
  {
    titulo: 'Recuperacion Post-Esfuerzo',
    texto: 'Tecnicas para acelerar la recuperacion muscular despues del entrenamiento o la competencia.',
  },
  {
    titulo: 'Entrenamiento En Adultos',
    texto: 'Fortalecimiento y movilidad pensados para sostener la actividad fisica a cualquier edad.',
  },
  {
    titulo: 'Vendajes Funcionales',
    texto: 'Sosten y estabilidad articular para entrenar y competir con menor riesgo de lesion.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <p className="eyebrow services__eyebrow">Lo que hacemos</p>
        <h2 className="display services__title">Nuestros servicios</h2>

        <div className="services__grid">
          {SERVICIOS.map((s, i) => (
            <article className="service-card" key={s.titulo} style={{ '--delay': `${i * 60}ms` }}>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>

        <div className="services__cta">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
            Solicitar turno
          </a>
        </div>
      </div>
    </section>
  );
}
