import { useState, useEffect } from 'react';

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    idade: '',
  });

  const [formularioCompleto, setFormularioCompleto] = useState(false);

  useEffect(() => {
    const valores = Object.values(formulario);
    const camposPreenchidos = valores.filter((valor) => valor.trim() !== '');

    if (camposPreenchidos.length === 3) {
      setFormularioCompleto(true);
    } else {
      setFormularioCompleto(false);
    }
  }, [formulario]);

  const handleChange = (campo, valor) => {
    setFormulario({ ...formulario, [campo]: valor });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        value={formulario.nome}
        onChange={(e) => handleChange('nome', e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={formulario.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        value={formulario.idade}
        onChange={(e) => handleChange('idade', e.target.value)}
      />
      {formularioCompleto && <p>Formulário totalmente preenchido!</p>}
    </div>
  );
};

export default Formulario;
