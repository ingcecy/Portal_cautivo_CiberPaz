// Section.jsx
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './Footer';
import PropTypes from 'prop-types';  // Importa PropTypes
import Button from './Button';  // Importa el componente Button
import Card from './CardTerms';
import Checkbox from './CheckBox'; // Importa el componente Checkbox
import Social from './Social'; // Importa el componente Social
import Animal from './Animal';



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
        // backgroundColor: '#C3F3C0',
        backgroundImage: `url(fondo-nutria-3.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden', // Oculta el desplazamiento para el Footer
        zIndex: 1,          // Coloca el contenido por encima del Footer
        
      }}
    >

      {/* Contenedor para imágenes en la parte superior, solo visible en la primera sección */}
        <div style={{ display: 'flex',  position: 'absolute', left: '2%', top: '5%', gap: '0vw'}}>
          <img src="/logo_mintic.svg" alt="Logo MINTIC" onClick={() => window.open('https://www.mintic.gov.co/portal/inicio/', '_blank')} style={{ width: '11%', height: '111%', cursor: 'pointer' }} />
          <img src="/logo_ciberpaz.png" alt="Logo ciber paz" onClick={() => window.open('https://ciberpaz.gov.co/portal/', '_blank')} style={{ width: '6%', height: '6%', cursor: 'pointer' }} />
        </div>
        
      
      {/* Contenido principal */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color:'#313B72', paddingTop:'6%'  }}>
        <h2 className='titillium-web-bold' style={{fontSize:'7vh', padding: '2px 10px', backgroundColor: 'rgba(169, 202, 181, 0.8)', borderRadius: '20px',  display: 'inline-block',}}>{title}</h2>
        <p className='titillium-web-semibold' style={{fontSize:'4vh',  padding: '2px 10px', backgroundColor: 'rgba(169, 202, 181, 0.8)', borderRadius: '20px',  display: 'inline-block',}}>{content}</p>
      </div>

     {/* Animal Component, solo en la última sección */}
      {sectionIndex === totalSections - 1 && (
        <motion.div
          initial={{ opacity: 0}} // Inicia con opacidad 0 y desplazado hacia abajo
          animate={{ opacity: 1}} // Termina con opacidad 1 y en posición original
          exit={{ opacity: 0}}   // Se desvanece y vuelve a desplazarse hacia abajo al salir
          transition={{ duration: 0.5 }} // Duración de la animación en segundos
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a
            href="https://sensibilizacion.ciberpaz.gov.co/#/data-ciberpaz/response/64?type=public"
            rel="noopener noreferrer"
            style={{
              display: 'flex', // Permite centrar al contenido
              width: '400px', // Tamaño deseado del contenedor
              height: '400px',
            }}
          >
            <Animal
              style={{
                width: '250px', // Tamaño definido para mantener la resolución clara
                height: '250px',
                display: 'block', // Previene comportamiento inline
                margin: '0 auto', // Centra el componente dentro del enlace
              }}
            />
          </a>
        </motion.div>
      )}

      

      {/* Card y Checkbox con animación, solo en la primera sección */}
      <AnimatePresence>
        {sectionIndex === 0 && (
          <motion.div
            key="card-checkbox"
            initial={{ opacity: 0}} // Aparece desvaneciendo y subiendo
            animate={{ opacity: 1 }} // Totalmente visible
            exit={{ opacity: 0}} // Desvanece hacia arriba al salir
            transition={{ duration: 0.5 }}
            style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '20px' }}
          >
            <Card />
            <Checkbox />
          </motion.div>
        )}
      </AnimatePresence>

       {/* Social Component */}
       <div
        style={{
          position: 'absolute',
          bottom: '2%',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          zIndex: 2,
        }}
      >
        <Social />
      </div>

 {/* Contenedor principal de botones de navegación */}
      <div style={{
          position: 'absolute',
          bottom: '2%', 
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 5%',            // Ajusta el espacio desde los bordes laterales
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

