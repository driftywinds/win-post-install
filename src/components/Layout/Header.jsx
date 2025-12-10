const Header = () => {
  return (
    <div className="win98-inset" style={{
      padding: '12px',
      marginBottom: '8px',
      backgroundColor: 'var(--win95-light-gray)'
    }}>
      <h1 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>
        Windows Post-Install Generator
      </h1>
      <p style={{ fontSize: '12px', color: 'var(--win98-gray-dark)', lineHeight: '1.5' }}>
        Create custom installation script that:<br />
        • automatically installs selected programs<br />
        • adjusts selected settings<br />
        Everything automatically<br />
        <br />
        Right-click the downloaded .bat file and select "Run as Administrator"
      </p>
    </div>
  );
};

export default Header;
