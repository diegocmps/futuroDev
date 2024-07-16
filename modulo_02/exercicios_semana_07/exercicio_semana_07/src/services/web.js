export async function getUsers() {
    const response = await fetch('http://localhost:3000/users', {
        method: 'GET'
    })



    const data = await response.json()

    console.log(data)

    return data
}

