async function actualizarUsuario(usuarioId, cambios) {

    const usuarios = await obtenerUsers();

    const usuario = usuarios.find(user => user.id === usuarioId);

    if (!usuario) {
        console.log("Usuario no encontrado");
        return null;
    }

    const usuarioActualizado = { ...usuario, ...cambios };

    return usuarioActualizado;
}

async function mostrarUsuarioActualizado() {
    const usuarioId = 1; 
    const cambios = {
        name: "Leanne Graham Actualizado",
        email: "nuevoemail@april.biz"
    };



    const usuarioActualizado = await actualizarUsuario(usuarioId, cambios);

    if (usuarioActualizado) {
        console.log("Actividad 10 : Usuario actualizado:")
        console.log(usuarioActualizado);
    }
}

mostrarUsuarioActualizado();