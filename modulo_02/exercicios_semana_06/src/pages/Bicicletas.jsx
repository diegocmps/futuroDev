import CardBicicleta from "../components/CardBicicleta"
import { useEffect, useState } from "react"

function Bicicletas() {

    const bicicletasOriginal = [
        {
            id: 0, nomeModelo: 'Magic Might', preco: 2499, categoria: 'A',
            imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg',
        },
        {
            id: 1, nomeModelo: 'Nimbus Stark', preco: 4999, categoria: 'B',
            imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg',
        },
        {
            id: 2, nomeModelo: 'Nebula Cosmic', preco: 3999, categoria: 'C',
            imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg',
        }
    ]

    const [bicicletas, setBicicletas] = useState(bicicletasOriginal)
    const [filtro, setFiltro] = useState('T')

    function mudarCategoria(categoria) {
        setFiltro(categoria)
    }

    useEffect(() => {
        if (filtro === 'T') {
            setBicicletas(bicicletasOriginal)
        } else {
            const bicicletasFiltradas = bicicletasOriginal.filter(bike => bike.categoria)
            setBicicletas(bicicletasFiltradas)
        }
    }, [filtro])

    function comprarBike() {
        console.log('comprando a bicicleta')
    }

    const estaAutenticado = true
    function componenteBemVindo() {
        if(!estaAutenticado) {
            return <span>Olá, Visitante</span>
        }

        return <span>Olá, Diego</span>
    }




    return (
        <>

            {componenteBemVindo()}

            <h1>Bicicletas</h1>
            <span>Categoria Aplicada: {filtro}</span>

            <div>
                <button onClick={() => mudarCategoria('A')}>Categoria A</button>
                <button onClick={() => mudarCategoria('B')}>Categoria B</button>
                <button onClick={() => mudarCategoria('C')}>Categoria C</button>
                <button onClick={() => mudarCategoria('T')}>Mostrar Todas</button>

            </div>

            <div className="list">
                {bicicletas.map(bike =>
                    <CardBicicleta
                        key={bike.id}
                        imgSrc={bike.imgSrc}
                        preco={bike.preco}
                        nomeModelo={bike.nomeModelo}
                        comprarBike={comprarBike} />
                )}

            </div>

        </>
    )
}

export default Bicicletas