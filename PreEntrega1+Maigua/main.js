// Función principal para calcular el total
function calculateTotal() {
    let total = 0;

    // Selecciona los productos marcados
    const products = document.querySelectorAll(".product:checked");
    products.forEach(product => {
        total += parseFloat(product.getAttribute("data-price"));
    });

    // Selecciona los servicios marcados
    const services = document.querySelectorAll(".service:checked");
    services.forEach(service => {
        total += parseFloat(service.getAttribute("data-price"));
    });

    // Aplicar descuento condicional si el total excede un monto
    if (total > 5000) {
        total *= 0.9; // 10% de descuento
    }

    // Actualiza el DOM con el costo total
    document.getElementById("total").innerText = `Costo Total: $${total.toFixed(2)}`;
}