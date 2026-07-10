import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#enfoque', label: 'Enfoque' },
  { href: '#obras-sociales', label: 'Obras Sociales' },
  { href: '#ubicacion', label: 'Ubicacion' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <img src="/logo-icon.png" alt="RECOVER" />
          <span>RECOVER</span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="https://wa.me/543854735740" className="btn btn-primary navbar__cta">
          Reservar evaluacion
        </a>

        <button
          className="navbar__burger"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#ubicacion" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Reservar evaluacion
          </a>
        </div>
      )}
    </header>
  );
}
