

// Footer.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Footer({ images }) {
  const styles = {
    width: '100vw',
    height: '60vh',  // Usa 'vh' para permitir una mejor adaptación vertical en pantallas grandes
    backgroundImage: `url(/${images})`,
    backgroundPosition: 'center bottom', // Mantiene la imagen alineada en la parte inferior sin recortes
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // Mantiene la imagen en todo el ancho
  };

  return (
    <motion.div
      style={styles}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    />
  );
}

Footer.propTypes = {
  images: PropTypes.string.isRequired,
};

export default Footer;
