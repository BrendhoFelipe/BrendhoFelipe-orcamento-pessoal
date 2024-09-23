// src/components/Despesa.js
import React, { useState } from 'react';

function Despesa({ adicionarDespesa }) {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valor || !descricao) {
      alert('Por favor, preencha todos os campos.');
      return; // Adiciona uma validação simples
    }
    adicionarDespesa({ valor: parseFloat(valor), descricao });
    setValor('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={valor} 
        onChange={(e) => setValor(e.target.value)} 
        placeholder="Valor da Despesa" 
        required
      />
      <input 
        type="text" 
        value={descricao} 
        onChange={(e) => setDescricao(e.target.value)} 
        placeholder="Descrição" 
        required
      />
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
}

export default Despesa;
