import './CategoriaProduto.css'

// eslint-disable-next-line react/prop-types
function CategoriaProduto({ texto, imagem}) {
    return (

        <>
            <div className="card-categoria">
                <div className="categoria-produto">
                    <div className="imagem">
                        <img className="imgProduto" src={imagem}  />
                    </div>
                    <p>{texto}</p>
                </div>
            </div>

        </>

    )
}

export default CategoriaProduto