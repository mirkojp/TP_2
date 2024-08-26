function mapearUsuarios(usuarios) {
    return usuarios.map(user => ({
        nombre: user.name,
        email: user.email
    }));
}

async function imprimirNombresMailsDeUsuarios() {
    const users = await obtenerUsers();
    const nombresYEmails = mapearUsuarios(users);
    console.log("Actividad 4: Nombres y Emails de Usuarios");
    console.log(nombresYEmails);
}

imprimirNombresMailsDeUsuarios();