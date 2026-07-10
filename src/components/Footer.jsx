export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-icon.png" alt="RECOVER" />
          <div>
            <p className="footer__name">RECOVER</p>
            <p className="footer__tagline">Centro de Rehabilitacion y Readaptacion Fisica</p>
          </div>
        </div>

        <p className="footer__address">Av. Belgrano (N) 164, Santiago del Estero Capital</p>

        <p className="footer__copy">© {new Date().getFullYear()} RECOVER. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
