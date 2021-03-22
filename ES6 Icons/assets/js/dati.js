// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le 
// icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo.
// Milestone 3 (BONUS)
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

$(document).ready(function() {

    $("select").change(function(e) {

        var userSelect = $(this).val();
        if (userSelect == "animals") {
            showIcon(animals)
        } else if (userSelect == "users") {
            showIcon(users)
        } else if (userSelect == "vegetables") {
            showIcon(vegetables)
        } else {
            showIcon(orderIcons)
        }
    });
});


const icons = [{
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];


let animals = icons.filter((el) => el.type == "animal")
let users = icons.filter((el) => el.type == "user")
let vegetables = icons.filter((el) => el.type == "vegetable")
const orderIcons = [...animals, ...users, ...vegetables]

function showIcon(type) {

    let iconsEl = $("#icons")

    iconsEl.html("")
    type.forEach(el => {
        let color;
        if (el.type == "animal") {
            color = "blue"
        } else if (el.type == "vegetable") {
            color = "orange"
        } else {
            color = "purple"
        }
        iconsEl.append(`<li><i class="${el.family} ${el.prefix}${el.name} ${color}"></i></li>`);
    });

}