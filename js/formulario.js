// Función para mostrar el formulario dependiendo del estado del checkbox
function toggleFormularioConfidencial() {
    var entregaPropietario = document.getElementById('entregaPropietario').checked;
    var entregaTercero = document.getElementById('entregaTercero').checked;
    
    // Mostrar el formulario de Información Confidencial si "Entrega a un Tercero" está activado
    if (entregaTercero) {
        document.getElementById('informacionConfidencial').style.display = 'block';
    } else {
        document.getElementById('informacionConfidencial').style.display = 'none';
    }

    // Activar el botón "Enviar Datos" solo si "Entrega al Propietario" está marcado
    var enviarDatosButton = document.getElementById('enviarDatos');
    if (entregaPropietario) {
        enviarDatosButton.disabled = false;
    } else {
        enviarDatosButton.disabled = true;
    }
}

// Función para mostrar el formulario de Dirección de Envío al hacer clic en el link
function mostrarFormulario(idFormulario) {
    document.getElementById(idFormulario).style.display = 'block';
}
