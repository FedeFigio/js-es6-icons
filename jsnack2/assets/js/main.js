// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)

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


    myfilter(bikes, 0, 5)
});

function myfilter(array, a, b) {

    let newArray = []

    array.forEach(function(element, i) {
        if ((i >= a) && (i <= b)) {
            newArray.push(element)
        }
    });
    console.log(newArray);
}