
function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}

async function mostrarUsuarioPorEmail(email) {
    const usuarios = await obtenerUsers();
    const usuario = buscarUsuarioPorEmail(usuarios, email);
    
    console.log("Actividad 8 : Busquedad de user:")
    if (usuario) {
        console.log("Usuario encontrado: Sincere@april.biz");
        console.log(usuario);
    } else {
        console.log("No se encontró ningún usuario con el email: Sincere@april.biz");
    }
}
mostrarUsuarioPorEmail("Sincere@april.biz");