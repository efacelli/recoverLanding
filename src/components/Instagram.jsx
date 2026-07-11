import { useEffect } from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/recover.kine/';

const REELS = [
  'https://www.instagram.com/reel/DYGJUr6JQWK/',
  'https://www.instagram.com/reel/DaYDfUPAtFo/',
  'https://www.instagram.com/reel/DYYIbdCJmus/',
];

export function Instagram() {
  useEffect(() => {
    // Instagram expone window.instgrm una vez que su script termino de
    // cargar. Si ya esta cargado (navegacion interna), solo hay que pedirle
    // que procese los blockquotes nuevos; si no, se carga el script oficial.
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="instagram" className="section instagram">
      <div className="container">
        <p className="eyebrow instagram__eyebrow">Seguinos</p>
        <h2 className="display instagram__title">@recover.kine</h2>
        <p className="instagram__sub">
          Mira contenido de entrenamientos, rehabilitacion y el dia a dia del centro.
        </p>

        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn btn-primary instagram__follow">
          Seguir en Instagram
        </a>

        <div className="instagram__grid">
          {REELS.map((url) => (
            <div className="instagram__embed" key={url}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
