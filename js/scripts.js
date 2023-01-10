//array immagini
let imagesList = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

let items = document.querySelector('.items');
let active = 0; 
    for (let i = 0; i < imagesList.length; i++){
        items.innerHTML +=
        `<div class="item"><img src="${imagesList[i]}" alt=""></div>`;             
}          

document.querySelector('.item').classList.add('d-block');
let img = document.querySelectorAll('.item');

document.querySelector('.after').addEventListener("click" , function(){
    console.log(img);
    img[active].classList.remove('d-block');
    if(active == img.length-1){
        active = 0;
    }

    else{
        active++;
        }
        img[active].classList.add('d-block');
    });

document.querySelector('.before').addEventListener("click" , function(){
    
    console.log(img);
    img[active].classList.remove('d-block');
    if(active == 0){   
        active = img.length-1;
        }
        else{
            active--;
        }
        img[active].classList.add('d-block');
    }); 