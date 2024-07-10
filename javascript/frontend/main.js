function enviarDatos(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('mail').value;

    const datos = {
        apellidos: apellido,
        nombres: nombre,
        correo: correo,
    };

    fetch('/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (!response.ok) {
            console.log('Error al enviar los datos:', response.status);
        }
        return response.json();
    })
    .then(respuestaJson => {
        console.log('Servidor:', respuestaJson);
        alert('Datos enviados correctamente');
        document.getElementById('formularioContacto').reset(); 
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar los datos');
    });
}


const enviar = document.querySelector("button[type='submit']");
enviar.addEventListener("click", enviarDatos);

