import '../assets/styles/Footer.css'

function Footer() {
    return (
        
        <div className="footer">

            <div className='footer-container'>

            <img className='logo-img' src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="logo" />
            <div className="footer-contato">
                <h3>Contato</h3>
                <ul>
                    <li>+55 21 9999-9999</li>
                    <li className='linha-cinza'>contato@bikcraft.com</li>
                    <li>Rua Ali Perto, 42 - Botafogo</li>
                    <li className='linha-cinza'>Rio de Janeiro - RJ</li>
                </ul>

                <div className="footer-redes">
                    <img className='redes-img' src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg" alt="Instagram" />
                    <img className='redes-img' src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg" alt="Facebook" />
                    <img className='redes-img' src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg" alt="Youtube" />
                </div>
            </div>


            <div className='footer-informacoes'>
                <h3>Informações</h3>
                <nav>
                    <ul>
                        <li>Bicicletas</li>
                        <li>Seguros</li>
                        <li>Contato</li>
                        <li>Termos e Condições</li>
                    </ul>

                </nav>

            </div>


            </div>
            

            <p>Bikcraft © Alguns direitos reservados.</p>


        </div>



    )
}

export default Footer

