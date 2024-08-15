import PropTypes from "prop-types";
import '../styles/Card.css';

function Card({ input1, input2 }) {
  return (
    <div>
      <h2>Información Ingresada</h2>
      <p><strong>Nombre:</strong> {input1}</p>
      <p><strong>Color en Hexadecimal:</strong> {input2}</p>
      <div style={{ backgroundColor: input2, width: '100px', height: '100px' }} />
    </div>
  );
}

Card.propTypes = {
  input1: PropTypes.string.isRequired,
  input2: PropTypes.string.isRequired,
};

export default Card;
