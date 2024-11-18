// // Footer.jsx
// import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';

// function Footer({ images }) {
//   const [screenSize, setScreenSize] = useState("desktop");

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 600) {
//         setScreenSize("mobile");      // Pantallas de celulares
//       } else if (width < 1024) {
//         setScreenSize("tablet");      // Pantallas de tablets
//       } else {
//         setScreenSize("desktop");     // Pantallas de escritorio
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();  // Inicializa el tamaño al cargar la página

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Define estilos de altura y posición en función del tamaño de la pantalla
//   const height = screenSize === 'mobile' ? '40vh' : screenSize === 'tablet' ? '45vh' : '50vh';
//   const styles = {
//     width: '100vw',
//     height,                        // Usa el valor de altura dinámico calculado
//     backgroundImage: `url(/${images})`,
//     backgroundSize: 'cover',       // Asegura que la imagen ocupe todo el ancho del contenedor
//     backgroundPosition: 'center bottom', // Centra la imagen y alinea desde la parte inferior
//     backgroundRepeat: 'no-repeat',
//     zIndex: 0,
//   };

//   // Configura el valor de desplazamiento `y` en función del tamaño de la pantalla
//   const yValue = screenSize === 'mobile' ? 50 : screenSize === 'tablet' ? 75 : 100;

//   return (
//     <motion.div
//       style={styles}
//       initial={{ opacity: 0, y: yValue }}        // Desplazamiento adaptado al tamaño de pantalla
//       animate={{ opacity: 1, y: 0 }}             // Vuelve a su posición original al entrar
//       exit={{ opacity: 0, y: yValue }}           // Se desplaza al salir
//       transition={{ duration: 0.5 }}             // Duración de la transición
//     />
//   );
// }

// Footer.propTypes = {
//   images: PropTypes.string.isRequired,
// };

// export default Footer;


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
