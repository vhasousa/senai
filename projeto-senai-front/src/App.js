import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/alunos', { nome, idade });
    alert('Aluno cadastrado!');
    setNome('');
    setIdade('');
  };

  return (
    <div className="App">
      <h1>Cadastro de Aluno</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
