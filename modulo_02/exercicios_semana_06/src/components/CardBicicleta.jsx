import '../assets/styles/CardBicicleta.css'

// eslint-disable-next-line react/prop-types
function CardBicicleta({ nomeModelo, preco, imgSrc, comprarBike }) {



    return(
        <>
            <div className="card-bicicleta">
                <img src={imgSrc} alt="Imagem do modelo da bike" />
                <h3 className='modelo'>{nomeModelo}</h3>
                <span className='preco'>R$ {preco}</span>
                <button onClick={()=> comprarBike()}>Comprar</button>
            </div>
        </>
    )
}

export default CardBicicleta