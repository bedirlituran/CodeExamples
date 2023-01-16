data=[
    {
        id: 1,
        img: 'img/slider/1.png',
    }
    ,
    {
       id: 2,
        img: 'img/slider/2.jpg',
    }
    ,
    {
        id: 3,
        img: 'img/slider/3.png',
    }
]
let slides=document.querySelector('.slides');
let slideAmount=800;
let slidePosition=0;
function generateSlides(){
    slides.innerHTML='';
    for (let i=0; i<data.length; i++){
        let template=`
        <div class="slide">
            <img src="${data[i].img}" alt="">
        </div>
        `
        slides.innerHTML+=template;
    }
}
generateSlides();
function slideLeft(e){
    e.preventDefault();
    slides.style.transform='translateX(-800px)';
    
    
}
function slideRight(e){
    e.preventDefault();
    slides.style.transform='translateX(0px)';
    
    
}