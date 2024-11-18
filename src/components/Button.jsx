import styled from 'styled-components';
import PropTypes from 'prop-types';


const Button = ({ onClick, children }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
      {children}
      </button>
    </StyledWrapper>
  );
}

Button.propTypes = {
    onClick: PropTypes.func,   // Añadimos validación de PropTypes para onClick
    children: PropTypes.node,  // Añadimos validación para el texto del botón
  };

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    position: relative;
    padding: 10px 24px;
    font-size: 45px;
    color: #7EE081;
    border: 2px solid #7EE081;
    border-radius: 34px;
    background-color: transparent;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
  }

  .button::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: #7EE081;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .button:hover::before {
    scale: 5;
  }

  .button:hover {
    color: #462255;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
  }

  .button:active {
    scale: 1;
  }
    
   /* Estilos responsivos */
  @media (max-width: 1024px) { /* Tablet */
    .button {
      font-size: 22px;
      padding: 8px 20px;
    }
  }

  @media (max-width: 768px) { /* Pantallas pequeñas */
    .button {
      font-size: 20px;
      padding: 6px 16px;
    }
  }

  @media (max-width: 480px) { /* Móviles */
    .button {
      font-size: 18px;
      padding: 4px 12px;
    }
  
  
  `;

export default Button;

