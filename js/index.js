function calculateTicketPriceTotal() {
    const category = document.getElementById("categoria").value;
    const quantity = document.getElementById("cantidad").value;

    const total = getSummary(quantity, category);

    console.log(total)
}

function getSummary(cantTicket, category) {
    if (cantTicket > 0) {
        let valorTicket = 200;
        let totalResume;
        let categoryDiscount = getCategoryDiscount(category);

        totalResume = (valorTicket * cantTicket);
        totalResume = totalResume - (totalResume * categoryDiscount) / 100;
        document.getElementById("resultado").textContent = totalResume;

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