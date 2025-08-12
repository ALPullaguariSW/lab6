// usar la logica de la clase sum

function sum(a, b) {
    return a + b;
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const result = sum(1, 2);
    document.getElementById("out").innerHTML = "La suma de 1 y 2 es: " + result;
});







