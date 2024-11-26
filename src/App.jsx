// App.jsx
import { useState } from 'react';
import Section from './components/Section';

const sectionsData = [
  { title: '¡Hola!', content: 'Antes de empezar' },
  { title: 'Servicios', content: 'Aquí puedes encontrar los servicios que ofrecemos.' },
  { title: 'Conéctate', content: 'Dale click' },
];

const images = {
  0: 'footer-4.svg',    // Imagen para la primera sección
  1: 'footer-5.svg',    // Imagen para la segunda sección
  2: 'footer-6.svg',    // Imagen para la tercera sección
};

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = sectionsData.length; // Total de secciones


  const nextSection = () => {
    if (currentSection < totalSections  - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <Section
      title={sectionsData[currentSection].title}
      content={sectionsData[currentSection].content}
      onNext={nextSection}
      onPrev={prevSection}
      footerImage={images[currentSection]}  // Pasa la imagen correspondiente al Footer
      // isFirstSection={currentSection === 0}  // Indica si es la primera sección
      sectionIndex={currentSection}       // Pasa el índice de la sección actual
      totalSections={totalSections}       // Pasa el número total de secciones
    />
  );
}

export default App;
