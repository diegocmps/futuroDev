import { Component } from 'react';

class InputControlado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoDigitado: '',
    };
  }

  handleChange = (event) => {
    this.setState({ textoDigitado: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.textoDigitado}
          onChange={this.handleChange}
        />
        <p>Texto digitado: {this.state.textoDigitado}</p> {}
      </div>
    );
  }
}

export default InputControlado;
