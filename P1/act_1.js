const libro = {
    titulo : "Asi hablo Zaratustra",
    autor : "Nietzsche",
    añoDePublicacion : "1883",
};

console.log("Actividad 1 : Atributos libro");
for (let key in libro){
        let value = libro[key];
        console.log(key, value);
};


