import { useState } from 'react';

function InputList() {
  const [inputValue, setInputValue] = useState(''); // Estado para o valor do input
  const [listItems, setListItems] = useState([]); // Estado para a lista de itens

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Atualiza o valor do input
  };

  const handleAddToList = () => {
    if (inputValue.trim() !== '') {
      // Adiciona o valor à lista (se não estiver vazio)
      setListItems([...listItems, inputValue]);
      setInputValue(''); // Limpa o input
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite algo..."
      />
      <button onClick={handleAddToList}>Adicionar à lista</button>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputList;
