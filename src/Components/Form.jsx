import PropTypes from 'prop-types';
import "../styles/Form.css";

function Form({ onSubmit, onChange, values }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="input1">Ingrese tu nombre:</label>
        <input
          type="text"
          id="input1"
          name="input1"
          value={values.input1}
          onChange={onChange}
          placeholder="Nombre"
        />
      </div>
      <div>
        <label htmlFor="input2">Ingresa un color en hexadecimal:</label>
        <input
          type="text"
          id="input2"
          name="input2"
          value={values.input2}
          onChange={onChange}
          placeholder="#FFFFFF"
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    input1: PropTypes.string.isRequired,
    input2: PropTypes.string.isRequired,
  }).isRequired,
};
export default Form;
