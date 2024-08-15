import { useState } from 'react';
import Form from "./Components/Form";
import Card from "./Components/Card";
import Message from "./Components/Message";
import "./styles/App.css";

function App() {
  const [values, setValues] = useState({ input1: '', input2: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidName = values.input1.trim().length >= 3;
    const isValidHexColor = /^#[0-9A-Fa-f]{6}$/i.test(values.input2);

    if (isValidName && isValidHexColor) {
      setError(false);
      setSubmitted(true);
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Elige un color</h1>
      <Form onSubmit={handleSubmit} onChange={handleChange} values={values} />
      {error && <p style={{ color: 'red' }}>Por favor chequea que la información sea correcta</p>}
      {submitted && (
        <>
          <Message name={values.input1} email="tuemail@example.com" /> {/* Usar Message */}
          <Card name={values.input1} colorHex={values.input2} /> {/* Usar Card */}
        </>
      )}
    </div>
  );
}

export default App;


