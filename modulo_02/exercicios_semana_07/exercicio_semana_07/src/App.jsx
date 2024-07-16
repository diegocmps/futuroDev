
import { Contador } from './components/Contador'
import { Filter } from './components/Filter'
import { News } from './components/News'

function App() {


  return (

    <div>

      <div className='list-contador'>
        <Contador />
      </div>



      <Filter></Filter>

      <News/>


    </div>

  )
}

export default App
