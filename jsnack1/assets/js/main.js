// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.
// Usiamo il forEach

$(document).ready(function() {
    const bikes = [{
            nome: "bianchi",
            peso: 20
        },
        {
            nome: "graziella",
            peso: 60
        },
        {
            nome: "bmx",
            peso: 24
        },
        {
            nome: "mountain bike",
            peso: 14
        },
        {
            nome: "corsa",
            peso: 11
        },
        {
            nome: "cross",
            peso: 8
        },
    ]

    let pesoMinore = bikes[0].peso;

    bikes.forEach(element => {
        if (element.peso < pesoMinore) {
            pesoMinore = element.peso
        }
    });
    var smallBike = bikes.filter((element) => element.peso == pesoMinore)
    console.log(`la bici: ${smallBike[0].nome}  pesa: ${smallBike[0].peso}kg`);
});