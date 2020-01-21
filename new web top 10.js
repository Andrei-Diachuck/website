let modalTwo = document.getElementById("myModalTwo");
let btmTwo  = document.getElementById("myBtntwo");
let closeTwo = document.getElementsByClassName("closeTwo")[0];

btmTwo.onclick = function(){
    modalTwo.style.display = 'block';
}

closeTwo.onclick = function(){
    modalTwo.style.display = "none";
}

window.onclick = function(){
    if(event.target == modalTwo){
        modalTwo.style.display = "none";
    }
}