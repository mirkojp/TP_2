// Validación de Formularios:
// ○ Crea una función llamada validarFormulario que tome un objeto con
// los campos nombre, email y password. La función debe devolver true si todos 
// los campos están presentes y no están vacíos, y false en caso
// contrario.

function validarFormulario(user) {
    return user.hasOwnProperty("nombre") && user.nombre.trim() !== "" &&
        user.hasOwnProperty("email") && user.email.trim() !== "" &&
        user.hasOwnProperty("password") && user.password.trim() !== "";
}

const formularioValido = {
    nombre: "Juan",
    email: "juan@example.com",
    password: "contraseña123"
};

const formularioInvalido = {
    nombre: "",
    email: "juan@example.com",
    password: "contraseña123"
};

const formularioIncompleto = {
    nombre: "Juan",
    email: "juan@example.com"
};


console.log("Actividad 5: Validacion de formularios");
console.log("Formulario válido:");
console.log(validarFormulario(formularioValido)); 

console.log("Formulario inválido (campo vacío):");
console.log(validarFormulario(formularioInvalido)); 

console.log("Formulario incompleto:");
console.log(validarFormulario(formularioIncompleto)); 