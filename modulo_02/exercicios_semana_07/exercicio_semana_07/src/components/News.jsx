import { useState, useEffect } from "react"

export function News() {

    const [title, setTitle] = useState(null)

    async function getNews() {
        const response = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')

        const data = await response.json()

        setTitle(data.items[0].titulo)

    }

    useEffect(() => {
        getNews()

    }, [])

    return (
        <div className="contador">
            <strong>Noticia do dia</strong>
            <p>
                {title}

            </p>
        </div>
    )
}