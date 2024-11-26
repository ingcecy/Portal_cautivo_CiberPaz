import styled from 'styled-components';
import PropTypes from 'prop-types';


const Checkbox = ({ onChange }) => {
  return (
    <StyledWrapper>
      <div className="uv-checkbox-wrapper">
        <input type="checkbox" id="uv-checkbox" className="uv-checkbox" onChange={onChange} />
        <label htmlFor="uv-checkbox" className="uv-checkbox-label">
          <div className="uv-checkbox-icon">
            <svg viewBox="0 0 24 24" className="uv-checkmark">
              <path d="M4.1,12.7 9,17.6 20.3,6.3" fill="none" />
            </svg>
          </div>
          <span className="uv-checkbox-text">Acepto los términos y condiciones</span>
        </label>
      </div>
    </StyledWrapper>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired, // Prop para manejar cambios en el checkbox
};

const StyledWrapper = styled.div`
  .uv-checkbox-wrapper {
    display: absolute;
  }

  .uv-checkbox {
    display: none;
  }

  .uv-checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #7EE081;
    border-radius: 30px;
    padding: 0.5em 1em;
    opacity: 0.86;
  }

  .uv-checkbox-icon {
    position: relative;
    width: 2em;
    height: 2em;
    border: 2px solid #462255;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transition: border-color 0.3s ease, border-radius 0.3s ease;
  }

  .uv-checkmark {
    position: absolute;
    top: 0.1em;
    left: 0.1em;
    width: 1.6em;
    height: 1.6em;
    fill: none;
    stroke: #7EE081;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    transition: stroke-dashoffset 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }

  .uv-checkbox-text {
    margin-left: 0.5em;
    transition: color 0.3s ease;
    font-family: "Titillium Web", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.4vw;
  }

  .uv-checkbox:checked + .uv-checkbox-label .uv-checkbox-icon {
    border-color: #462255;
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
    background-color: #462255;
  }

  .uv-checkbox:checked + .uv-checkbox-label .uv-checkmark {
    stroke-dashoffset: 0;
  }

  .uv-checkbox:checked + .uv-checkbox-label .uv-checkbox-text {
    color: #62A87C;
  }`;

export default Checkbox;
