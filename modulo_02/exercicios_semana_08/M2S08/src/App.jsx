import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin/Login'
import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos'




function App() {

  const isAuthenticated = true

    return (
        <>
        <Router>
            <Routes>
                <Route path='/login' element={(<Signin />)} />
                <Route path='/home' element={(<Home />)} />
                <Route path='/' element={(<Home />)} />
                <Route path='/produtos' element={(<Produtos />)} />


                {isAuthenticated ?
                    (
                        <>
                            <Route path='/' Component={Home} />
                            
                            
                        </>
                    )
                    : (
                        <>
                            <Route path='*' element={<Navigate replace to='/login' />} />
                        </>
                    )
                }
            </Routes>
        </Router>
        </>
  )
}
export default App