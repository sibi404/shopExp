let checkButton = document.getElementById("check");
let items = document.getElementById("nav-items");


let searchCheckButton = document.getElementById("search-check");
let searchBar = document.getElementById("mobile-search");


function checkMenuStatus(){
    if (checkButton.checked){
        items.style.left = 0;
    }else{
        items.style.left = "-100vw";
    }
}

function checkSearchStatus(){
    if (searchCheckButton.checked){
        searchBar.style.left = 0;
    }else{
        searchBar.style.left = "-100vw";
    }
}