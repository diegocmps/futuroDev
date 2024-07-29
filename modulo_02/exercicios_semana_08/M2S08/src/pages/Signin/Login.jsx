import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'




function Signin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {

        e.preventDefault()

        if (email === 'admin@admin.com' && senha === 'admin123') {
            console.log('Redirecionando para a Home')
            navigate('/home')
            return

        } else {
            alert('Email e/ou senha incorretos')
        }

        setEmail('')
        setSenha('')


    }

    return (
        <>
            <form onSubmit={handleSubmit}>


                <div>

                    <img
                        src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=384&q=75"
                        alt="Logo"
                        className='logo'
                    />


                </div>

                <div className='area-login'>

                    <span>Insira seu e-mail para entrar ou se cadastrar:</span>

                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type='submit'>CONTINUAR COM E-MAIL</button>



                </div>

                <div className='footer'>

                    <div className='links'>
                        <p>Termos de uso</p>
                        <p>Política de privacidade</p>
                    </div>

                    <div className='endereco'>

                        <span>ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ: 37.657.197/0001-46</span>
                        <span>Rua Fradique Coutinho, 1632 - CEP: 05.416-002</span>
                        <span>Pinheiros - São Paulo/SP</span>


                    </div>


                </div>






            </form>
        </>


    )
}

export default Signin