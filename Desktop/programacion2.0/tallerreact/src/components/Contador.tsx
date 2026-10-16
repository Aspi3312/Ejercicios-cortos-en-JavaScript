import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="contador-container">
      <h1>Contador Interactivo</h1>
      <p className="contador-valor">{count}</p>
      <div className="contador-botones">
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
      </div>
    </div>
  );
}

export default Contador;