const image1 = document.querySelector(".image");
const nexte = document.querySelector(".next");
const images = document.querySelectorAll('.img1');
const prev = document.querySelector('.prev');

let flag = 1;

let timeout;

nexte.addEventListener("click", ab);

function ab(){
    flag++;
    clearTimeout(timeout);
    update();
}

prev.addEventListener("click", bc);

function bc(){
    flag--;
    clearTimeout(timeout);
    update();
}

update();

function update() {
    if(flag > images.length){
        flag = 1;
    }
    else if (flag < 1){
        flag = images.length;
    }
    image1.style.transform = `translateX(-${(flag-1) * 60}rem)`;
     timeout = setTimeout( () =>{
        flag++;
        update();
    },3000)
}
