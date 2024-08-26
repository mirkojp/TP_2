async function obtenerUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
}

async function mostrarUsuarios() {
    const users = await obtenerUsers()
    console.log("Actividad 1 : Mostrar users");
    console.log("Usuarios:")
    console.log(users)
}


mostrarUsuarios();