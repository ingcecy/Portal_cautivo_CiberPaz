// Section.jsx
import { AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import PropTypes from 'prop-types';  // Importa PropTypes
import Button from './Button';  // Importa el componente Button


function Section({ title, content, onNext, onPrev, footerImage, totalSections, sectionIndex  }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#C3F3C0',
        overflow: 'hidden', // Oculta el desplazamiento para el Footer
        zIndex: 1,          // Coloca el contenido por encima del Footer
        
      }}
    >

      {/* Contenedor para imágenes en la parte superior, solo visible en la primera sección */}
        <div style={{ display: 'flex',  position: 'absolute', left: '2%', top: '5%', gap: '0vw'}}>
          <img src="/logo_mintic.svg" alt="Logo MINTIC" style={{ width: '15%', height: '15%' }} />
          <img src="/logo_ciberpaz.png" alt="Logo ciber paz" style={{ width: '10%', height: '10%' }} />
        </div>
      
      {/* Contenido principal */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color:'#313B72'  }}>
        <h2 className='titillium-web-bold' style={{fontSize:'5rem'}}>{title}</h2>
        <p className='titillium-web-regular' style={{fontSize:'4rem'}}>{content}</p>
      </div>
      

 {/* Contenedor principal de botones de navegación */}
      <div style={{
          position: 'absolute',
          bottom: '5%',                // Posiciona los botones justo encima del footer
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 10%',            // Ajusta el espacio desde los bordes laterales
          zIndex: 2                    // Asegura que esté por encima del footer
        }}
      >
        
        {/* Contenedor del botón "Siguiente" a la izquierda */}
        <div style={{ visibility: sectionIndex < totalSections - 1 ? 'visible' : 'hidden' }}>
          <Button
            onClick={onNext}
            style={{
              fontSize: '1.5rem',
            }}
          >
            Siguiente
          </Button>
        </div>
        
        {/* Contenedor del botón "Anterior" a la derecha */}
        <div style={{ visibility: sectionIndex > 0 ? 'visible' : 'hidden' }}>
          <Button
            onClick={onPrev}
            style={{
              fontSize: '1.5rem',
            }}
          >
            Anterior
          </Button>
        </div>
      </div>

      

      <AnimatePresence mode="wait">
        <Footer key={footerImage} images={footerImage} />
      </AnimatePresence>
    </div>
  );
}

// Define la validación de props con PropTypes
Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  footerImage: PropTypes.string.isRequired,
  sectionIndex: PropTypes.number.isRequired,    // Índice de la sección actual
  totalSections: PropTypes.number.isRequired,   // Número total de secciones

};

export default Section;

