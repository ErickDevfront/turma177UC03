import { useState, useEffect } from 'react';

function Clima({ cidade }) {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    // Quando a cidade muda, busca a previsão do tempo
    fetch(`https://api.clima.com/${cidade}`)
      .then(res => res.json())
      .then(dados => setClima(dados));
  }, [cidade]); // <- useEffect observa a cidade

  return (
    <div>
      <h2>Previsão para {cidade}</h2>
      {clima ? (
        <p>Temperatura: {clima.temperatura}°C</p>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Clima;