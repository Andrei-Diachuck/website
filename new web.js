let modal = document.getElementById("myModal");
let btm = document.getElementById("myBtn");
let close = document.getElementsByClassName("close")[0];


let showPrevBtn = document.getElementById("show-prev");
let showNextBtn = document.getElementById("show-next");
let slideImg = document.getElementById("slider-img");
let currentImgIndex = 0;


let imhUrl = [];
imhUrl.push("https://i.pinimg.com/originals/83/4d/59/834d59420f8381b83e62ef1aeede3da7.jpg");
imhUrl.push("https://i.pinimg.com/originals/94/bc/d5/94bcd5470761afd8e1301b28b6b1834e.jpg");
imhUrl.push("http://www.ecopetit.cat/iconpics/f/27/275771/my-hero-academia-phone-wallpaper.png");
imhUrl.push("https://www.larutadelsorigens.cat/wallpic/full/4-42093_art-wallpaper-sky-full-of-sky-lanterns-cute.jpg");
imhUrl.push("https://backgroundcheckall.com/wp-content/uploads/2018/10/pokemon-background-iphone-4.jpg");
imhUrl.push("https://mfiles.alphacoders.com/638/638263.png");
imhUrl.push("https://external-preview.redd.it/vr0gq3ByfkOZHBf_rhkVR07eHMBvn3nALSK4k5-AS4w.jpg?auto=webp&s=bad549ad05b02dfe06b1162c536776bf9735cfa6");
imhUrl.push("http://starkovtattoo.spb.ru/images/000/DSC100022180.jpg");
imhUrl.push("http://www.animehdwallpapers.net/downloads/720x1280-bleach-wallpaper-anime-eyes.jpg");
imhUrl.push("http://www.photoplato.com/photoplato/18769-anime-wallpaper-1080x1920_454.jpg");
imhUrl.push("https://archive-media-0.nyafuu.org/w/image/1505/55/1505558257753.png");
imhUrl.push("https://archive-media-0.nyafuu.org/w/image/1462/93/1462937253739.png");
imhUrl.push("https://archive-media-0.nyafuu.org/w/image/1425/75/1425753305961.jpg");
imhUrl.push("https://i.pinimg.com/originals/e1/56/f2/e156f282af5fe2379cd5be776bb8fd15.jpg");


slideImg.src = imhUrl[currentImgIndex];
showPrevBtn.disabled = true;


function onShowPrevBtnClick() {
    currentImgIndex--;
    slideImg.src = imhUrl[currentImgIndex];
    showNextBtn.disabled = false;

    if (currentImgIndex === 0 ){
        showPrevBtn.disabled = true;
    }
}
function onShowNextBtnClick() {
    currentImgIndex++;
    slideImg.src = imhUrl[currentImgIndex];
    showPrevBtn.disabled = false;

    if (currentImgIndex === (imhUrl.length - 1 ) ){
        showNextBtn.disabled = true;
    }
}


btm.onclick = function(){
    modal.style.display = 'block';
}
close.onclick = function(){
    modal.style.display = 'none'
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
