 // Función para generar RFC
 function generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
    const primeraLetraApellidoPaterno = apellidoPaterno.charAt(0).toUpperCase();
    const primeraVocalApellidoPaterno = apellidoPaterno.slice(1).replace(/[^aeiou]/gi, '').charAt(0).toUpperCase();
    const primeraLetraApellidoMaterno = apellidoMaterno.charAt(0).toUpperCase();
    const primeraLetraNombre = nombre.charAt(0).toUpperCase();
    const fecha = new Date(fechaNacimiento);
    const año = fecha.getFullYear().toString().slice(-2);
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const dia = fecha.getDate().toString().padStart(2, '0');
    
    return `${primeraLetraApellidoPaterno}${primeraVocalApellidoPaterno}${primeraLetraApellidoMaterno}${primeraLetraNombre}${año}${mes}${dia}`;
  }

  // Manejar evento de clic para generar RFC
  $('#generarRfc').click(function() {
    const nombre = $('#nombre').val();
    const apellidoPaterno = $('#apellidoPaterno').val();
    const apellidoMaterno = $('#apellidoMaterno').val();
    const fechaNacimiento = $('#fechaNacimiento').val();
    
    if (nombre && apellidoPaterno && apellidoMaterno && fechaNacimiento) {
      const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);
      $('#rfcResultado').text(rfc);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });

// Función para seleccionar un usuario aleatorio
function seleccionarUsuarioAleatorio(usuarios) {
    const usuarioAleatorio = usuarios[Math.floor(Math.random() * usuarios.length)];
    return usuarioAleatorio;
  }
  
  // Manejar evento de clic para seleccionar usuario aleatorio
  $('#consumirApi').click(function() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
      success: function(usuarios) {
        const usuario = seleccionarUsuarioAleatorio(usuarios);
        $('#nombreApi').text(usuario.name);
        $('#emailApi').text(usuario.email);
      },
      error: function() {
        alert('Error al obtener datos de la API.');
      }
    });
  });