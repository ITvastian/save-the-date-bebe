// // Definir la fecha de finalización del contador (por ejemplo, 3 días desde ahora)
// const tiempoFinal = new Date();
// tiempoFinal.setDate(tiempoFinal.getDate() + 3); // Sumar 3 días

// // Actualizar el contador cada segundo
// const intervalo = setInterval(() => {
//     // Obtener la fecha y hora actual
//     const ahora = new Date();

//     // Calcular la diferencia de tiempo en milisegundos
//     const diferencia = tiempoFinal - ahora;

//     // Calcular días, horas, minutos y segundos restantes
//     const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
//     const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
//     const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

//     // Mostrar el tiempo restante en los elementos HTML
//     document.getElementById('dias').textContent = dias;
//     document.getElementById('horas').textContent = horas;
//     document.getElementById('minutos').textContent = minutos;
//     document.getElementById('segundos').textContent = segundos;

//     // Si el tiempo restante es menor o igual a 0, detener el contador
//     if (diferencia <= 0) {
//         clearInterval(intervalo);
//         document.getElementById('dias').textContent = '0';
//         document.getElementById('horas').textContent = '0';
//         document.getElementById('minutos').textContent = '0';
//         document.getElementById('segundos').textContent = '0';
//     }
// }, 1000); // Actualizar cada segundo (1000 milisegundos)
// ---------------------

// Función para formatear los números a dos dígitos con ceros a la izquierda si es necesario
function formatNumero(numero) {
    return numero.toString().padStart(2, '0'); // Agrega ceros a la izquierda si el número tiene menos de dos dígitos
}

// Definir la fecha de finalización del contador (por ejemplo, 3 días desde ahora)
const tiempoFinal = new Date();
tiempoFinal.setDate(tiempoFinal.getDate() + 3); // Sumar 3 días

// Actualizar el contador cada segundo
const intervalo = setInterval(() => {
    // Obtener la fecha y hora actual
    const ahora = new Date();

    // Calcular la diferencia de tiempo en milisegundos
    const diferencia = tiempoFinal - ahora;

    // Calcular días, horas, minutos y segundos restantes
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el tiempo restante formateado en los elementos HTML
    document.getElementById('dias').textContent = formatNumero(dias);
    document.getElementById('horas').textContent = formatNumero(horas);
    document.getElementById('minutos').textContent = formatNumero(minutos);
    document.getElementById('segundos').textContent = formatNumero(segundos);

    // Si el tiempo restante es menor o igual a 0, detener el contador
    if (diferencia <= 0) {
        clearInterval(intervalo);
        document.getElementById('dias').textContent = '00';
        document.getElementById('horas').textContent = '00';
        document.getElementById('minutos').textContent = '00';
        document.getElementById('segundos').textContent = '00';
    }
}, 1000); // Actualizar cada segundo (1000 milisegundos)


    // Obtener los checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Agregar un listener de evento change a cada checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Si este checkbox se ha marcado, desmarcar el otro checkbox
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        });
    });