const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 32 },
    { nombre: "Maria", edad: 29 },
    { nombre: "Carlos", edad: 35 }
];

const personaMayorDeTreinta = personas.find(persona => persona.edad > 30);

console.log("Actividad 9 : Uso de find")
console.log("Primera persona mayor de 30 años:", personaMayorDeTreinta);