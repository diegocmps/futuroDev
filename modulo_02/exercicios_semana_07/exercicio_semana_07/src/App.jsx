import './App.css'
import { useRef } from 'react'
import { Contador } from './components/Exercicio01/Contador'
import News from './components/Exercicio02/News'
import InputList from './components/Exercicio03/InputList'
import Formulario from './components/Exercicio04/Formluario'
import InputControlado from './components/Exercicio05/InputControlado'




function App() {


  return (

    <div>

      <div className='list-contador'>
        <h1>Exercicio 01</h1>
        <Contador />
      </div>

      <div>
        <h1>Exercicio 02</h1>
        <News />

      </div>


      <div>
        <h1>Exercicio 03</h1>
        <InputList />
      </div>


        <div>
          <h1>Exercicio 04</h1>
          <Formulario />

        </div>

        <div>
          <h1>Exercicio 05</h1>
          <InputControlado />
        </div>


    </div>

  )
}

export default App
