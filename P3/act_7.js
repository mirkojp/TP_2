async function enviarDatos(data) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }

        const responseData = await response.json();


        console.log("Actividad 7 : Envío de Datos a una API:")
        console.log(responseData);

    } catch (error) {

        console.log("Actividad 7 : Envío de Datos a una API:")
        console.error("Error al enviar datos:", error);
    }
}

const datos = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

enviarDatos(datos);
