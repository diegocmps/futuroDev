const inputElement = document.querySelector('input')

const buttonForm = document.querySelector('form button')

const listaInteressesElemento = document.querySelector('.list')

let interesses = []

buttonForm.addEventListener('click', (event) => {
    const value = inputElement.value
    inputElement.value = ""

    interesses.push(value)


    listaInteressesElemento.innerHTML = ""

    interesses.forEach((item) => {
        let elementItem = document.createElement('li')
        elementItem.innerText = item

        listaInteressesElemento.appendChild(elementItem)

    })

})