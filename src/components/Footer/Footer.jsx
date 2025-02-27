const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#0E0D0D',
      color: '#fff',
      textAlign: 'center',
      padding: '10px 0',
      //position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      marginTop: '20px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      margin: '0 10px',
    },
  };

  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Mi Sitio de Películas. Todos los derechos reservados. Uso exclusivo para fines educativos.</p>
    </footer>
  );
};

export default Footer;