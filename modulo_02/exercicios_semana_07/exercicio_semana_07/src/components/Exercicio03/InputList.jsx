import { useState } from 'react';

function InputList() {
  const [inputValue, setInputValue] = useState(''); 
  const [listItems, setListItems] = useState([]); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleAddToList = () => {
    if (inputValue.trim() !== '') {
      
      setListItems([...listItems, inputValue]);
      setInputValue(''); 
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
