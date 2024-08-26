function generarToken(usuario) {
    // Convertir el objeto usuario a una cadena JSON
    const payload = JSON.stringify(usuario);

    // Codificar la cadena JSON en Base64
    const base64Payload = btoa(payload);

    // Simular el token JWT (sin header ni signature en esta simulación)
    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${base64Payload}.signature`;
}

// Ejemplo de uso
const usuario = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz"
};

console.log("Actividad 9 : Generar token:")
const token = generarToken(usuario);
console.log("Token generado:");
console.log(token);
