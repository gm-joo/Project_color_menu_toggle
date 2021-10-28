//kleuren menu requirements:
//1. Als gebruiker wil ik op een hamburger-icoon kunnen klikken dat uitklapt als ik er op klik.
//2. Als gebruiker wil ik in het uitgeklapte menu een keuze hebben aan kleuren (uitgeschreven in tekst). Elk item in het menu is één kleur.
//3. Als gebruiker wil ik op één van de kleuren kunnen klikken.
//4. Wanneer ik als gebruiker op de kleur in het menu heb geklikt verandert de achtergrondkleur van de gehele pagina in de aangeklikte kleur.
//5. Wanneer ik als gebruiker op de kleur in het menu klik, klapt het menu weer terug in.

var menuButton = document.querySelector(".button");
var listMenu = document.querySelector(".nav");
const colors = document.querySelector("ul");
const home = colors.firstElementChild;
const red = colors.getElementsByTagName("li")[1];
const orange = colors.getElementsByTagName("li")[2];
const purple = colors.getElementsByTagName("li")[3];
const green = colors.lastElementChild;
const bodybackground = document.body;

//click event zodat het menu weer terug inklapt als je op hamburger menu icoon klikt
const attachEventToButton = function () {
    menuButton.addEventListener("click", function () {
       listMenu.classList.toggle("nav");
    })
};
attachEventToButton();

//achtergrond kleuren verwijderen als je op Home klikt & menu klapt terug in
const makeNeutral = function(){
    home.addEventListener("click", function(){
        bodybackground.classList.remove("bg-green");
        bodybackground.classList.remove("bg-orange");
        bodybackground.classList.remove("bg-purple");
        bodybackground.classList.remove("bg-red");
        listMenu.classList.toggle("nav");
    })
};
makeNeutral();


//achtergrond wordt rood als je op Rood klikt in het menu & menu klapt terug in.
const makeRed = function(){
    red.addEventListener("click", function(){
        bodybackground.classList.add("bg-red");
        bodybackground.classList.remove("bg-green");
        bodybackground.classList.remove("bg-orange");
        bodybackground.classList.remove("bg-purple");
        listMenu.classList.toggle("nav");
    })
};
makeRed();

//achtergrond wordt oranje als je op Oranje klikt in het menu & menu klapt terug in.
const makeOrange = function(){
    orange.addEventListener("click", function(){
        bodybackground.classList.add("bg-orange");
        bodybackground.classList.remove("bg-green");
        bodybackground.classList.remove("bg-red");
        bodybackground.classList.remove("bg-purple");
        listMenu.classList.toggle("nav");
    })
};
makeOrange();

//achtergrond wordt paars als je op Paars klikt in het menu & menu klapt terug in.
const makePurple = function(){
    purple.addEventListener("click", function() {
        bodybackground.classList.add("bg-purple");
        bodybackground.classList.remove("bg-green");
        bodybackground.classList.remove("bg-red");
        bodybackground.classList.remove("bg-orange");
        listMenu.classList.toggle("nav");
    })
};
makePurple();


//achtergrond wordt groen als je op Groen klikt in het menu & menu klapt terug in
const makeGreen = function(){
    green.addEventListener("click", function(){
        bodybackground.classList.add("bg-green");
        listMenu.classList.toggle("nav");
    })
};
makeGreen();