function calculateTicketPriceTotal() {
    const category = document.getElementById("categoria").value;
    const quantity = document.getElementById("cantidad").value;
    const name = document.getElementById("nombre").value;
    const lastName = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;

    if (quantity > 0 && category != 'Seleccionar') {
        const total = getSummary(quantity, category);
        document.getElementById("resultado").textContent = total;
        alert("Felicidades!!\n" + name.trim() + " " + lastName.trim() + "\nEnviamos a tu email: " + email.trim() + " los detalles de la compra. \nTotal: " + total);
    } else {
        alert("Ingrese los datos adecuadamente.")
    }
    return;
}

function getSummary(cantTicket, category) {
    if (cantTicket > 0) {
        let valorTicket = 200;
        let totalResume;
        let categoryDiscount = getCategoryDiscount(category);

        totalResume = (valorTicket * cantTicket);
        totalResume = totalResume - (totalResume * categoryDiscount) / 100;
        return totalResume;
    }

}

function getCategoryDiscount(category) {
    let discount;
    switch (category) {
        case 'Estudiante':
            discount = 80;
            return discount;
            break;
        case 'Trainee':
            discount = 50
            return discount;
            break;
        case 'Junior':
            discount = 15;
            return discount;
            break;
    }
}

function borrarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "Seleccionar";
    document.getElementById("resultado").textContent = "";
}