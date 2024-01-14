import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [altura, setAltura] = useState<string>('');
  const [peso, setPeso] = useState<string>('');
  const [imc, setImc] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState<string>('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros);
    setImc(Number(imcCalculado.toFixed(2)));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm): </label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Peso (kg): </label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc !== null && (
        <div>
          <h2>Resultado:</h2>
          <p>IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;

