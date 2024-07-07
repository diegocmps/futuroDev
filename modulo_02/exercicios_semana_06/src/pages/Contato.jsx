// import { useState } from "react"
import { useState } from 'react'
import '../assets/styles/Contato.css'

function Contato() {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')


    function enviarMensagem() {
        const objetoContato = {
            nome,
            telefone,
            email,
            mensagem
        }

        console.log('Formulário a ser enviado: ', objetoContato)
    }

    return (
        <>


            <div className="nosso-contato">
                <div className="local">

                    <span>Loja Online</span>

                    <ul>
                        <li>
                            <span>Rua Ali Perto, 35</span>
                            <span>Rio de Janeiro - RJ</span>
                            <span>Brasil - Terra - Vita Láctea</span>
                        </li>

                        <li>
                            <span>contato@bikcraft.com</span>
                            <span>assistencia@bikcraft.com</span>

                        </li>

                        <li>
                            <span>+55 21 9999-9999</span>

                        </li>

                    </ul>


                </div>
                <div className="form">

                    <fieldset>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </fieldset>
                    
                    <fieldset>
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </fieldset>
                    
                    <fieldset>
                        <label htmlFor="">Mensagem</label>
                        <textarea placeholder="Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
                    </fieldset>
                    <button onClick={() => { enviarMensagem() }}>Enviar Mensagem</button>


                </div>


            </div>



        </>
    )
}

export default Contato