// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le 
// icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo.
// Milestone 3 (BONUS)
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


$(document).ready(function() {
    showIcon(orderIcons)

    $("select").change(function(e) {
        var userSelect = $(this).val();
        filter(userSelect)
    });
});


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
        iconsEl.append(`<li><i class="${el.family} ${el.prefix}${el.name} ${color}"></i> <span>${el.name}</span></li>`);
    });
}

function filter(x) {

    switch (x) {
        case "animals":
            showIcon(animals);
            break;
        case "vegetables":
            showIcon(vegetables);
            break;
        case "users":
            showIcon(users);
            break;
        default:
            showIcon(orderIcons);
            break;
    }
}