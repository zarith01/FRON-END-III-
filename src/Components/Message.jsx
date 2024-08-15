
import PropTypes from 'prop-types';
import '../styles/Message.css';  
const Message = ({ name, colorHex }) => {
  return (
    <div className="message-card">
      <h2>Hola, {name}!</h2>
      <h4>Sabemos que tu color favorito es:</h4>
      <div className="message-color-preview">
        <div 
          className="message-color-box"
          style={{ backgroundColor: colorHex }}
        ></div>
        <p className="message-color-value">{colorHex}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  colorHex: PropTypes.string.isRequired,
};

export default Message;