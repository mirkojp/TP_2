// Autenticación Simulada:
// ○ Crea una función llamada autenticarUsuario que tome un objeto
// credenciales con usuario y contraseña, y verifique si coinciden con
// un usuario predefinido.La función debe devolver true si la
// autenticación es exitosa y false en caso contrario.

async function autenticarUsuario(credenciales) {
    const usuarioPredefinido = {
        usuario: 'usuario123',
        contraseña: 'contraseñaSecreta'
    };
    if (credenciales.usuario === usuarioPredefinido.usuario &&
        credenciales.contraseña === usuarioPredefinido.contraseña) {
        return true;
    } else {
        return false;
    }
}
const credencialesValidas = { usuario: 'usuario123', contraseña: 'contraseñaSecreta' }
const credencialesInvalidas = { usuario: 'usuario123', contraseña: 'incorrecta' }

console.log("Actividad 3 : Simular autentificacion");
console.log("Autenticación con credenciales válidas:")
console.log(autenticarUsuario(credencialesValidas))

console.log("Autenticación con credenciales inválidas:")
console.log(autenticarUsuario(credencialesInvalidas))