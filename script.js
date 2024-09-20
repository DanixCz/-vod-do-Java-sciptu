
//function Add(){
//    let input = document.getElementById("input");
//    document.getElementById("output").innerHTML = input.value;
//}
//function Delete(){
//    output.innerHTML = ""
//}

let i = 1; //Proměná pro číslovat
let input = document.getElementById("input"); // Proměná pro odkaz na input podle ID
let output = document.getElementById("output"); // Proměna  pro odkaz na output podle ID

// Funkce pro přidávání textu do outputu (<p>)
function Add(){
    output.innerHTML += "<br>" +i + ". " + input.value; // Zde si z původního ukolu přendáme <br> na začítek, aby se nám pak emoji nedávali pod
    i++; // Přidáme k hodnotě + 1, aby nám číslovalo pořadí
    
}

// Funkce del pro vyčistění innerHTML v <p> (smažeme content)
function del(){
    // "=" - Změň content
    // "+=" - Přidej content
    output.innerHTML = ""; // "" - prázdný string, kterým přepíšete původní content
}

// Funkce pro přidání emoji pomocá parametru funkce
function Add_emoji(parametr){
    output.innerHTML += " " + parametr; // Zde jen připisujeme parametr funkce na základě zadané hodnoty v html atributu "onclick"
}
