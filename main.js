    // // slider
    // var images=[""
    // ]
    // var index=0
    // function next(){
    //     index=(index+1)%images.length
    //     document.getElementById("imgslid").src=images[index]
    // }
    // function prev(){
    //     index=(index-1+images.length)%images.length
    //     document.getElementById("imgslid").src=images[index]
    // }

    // var handler;
    // function play(){
    //     handler=setInterval(next, 1000);
    // }
    // function stop(){
    //     clearInterval(handler)
    // }


    var preloader = document.getElementsByClassName("preloader")[0];
    var header = document.getElementsByClassName("header")[0];

    var offers = document.getElementsByClassName("offers__item");

    var hero__heading=document.querySelector(".hero__heading ")
    var hero__text=document.querySelector(".hero__text")
    var hero__link=document.querySelector(".hero__link ")
    var image=document.querySelector(".hero__img")

    window.onload = function () {
        hero__heading.style.animation="heroslide 2s  .4s  forwards"
        hero__text.style.animation="heroslide 2s .6s forwards"
        hero__link.style.animation="heroslide 2s .8s  forwards"
        image.style.animation="imagefade 1s 1s forwards"

        setTimeout(function () {
        preloader.style.transition = "opacity 300ms"
        preloader.style.opacity = 0;

        setTimeout(function () {
        preloader.style.display = "none"

        }, 400)
    }, 1000)
    }

var feat=document.getElementsByClassName("feat")
    window.onscroll = function () {
    if (scrollY >= 450) {
        header.classList.add("fixed-bar");
        offers[0].style.animation = "fadeInUp 1.5s forwards"
        offers[1].style.animation = "fadeInUp 1.5s .4s forwards"
        offers[2].style.animation = "fadeInUp 1.5s .8s forwards"
    }
    else {
        header.classList.remove("fixed-bar")
    }
    if(scrollY>=2000){
        feat[0].style.animation = "fadeInUp 1.5s forwards"
        feat[1].style.animation = "fadeInUp 1.5s .4s forwards"
        feat[2].style.animation = "fadeInUp 1.5s .6s forwards"
        feat[3].style.animation = "fadeInUp 1.5s .8s forwards"
    }
}

    // const opinions = document.querySelectorAll('.opinion');
    // const nextBtn = document.getElementById('next');
    // const prevBtn = document.getElementById('prev');
    // let current = 0;

    // function showOpinion(index) {
    //     opinions.forEach((op, i) => {
    //     op.classList.toggle('active', i === index);
    //     });
    // }

    // nextBtn.addEventListener('click', () => {
    //     current = (current + 1) % opinions.length;
    //     showOpinion(current);
    // });

    // prevBtn.addEventListener('click', () => {
    //     current = (current - 1 + opinions.length) % opinions.length;
    //     showOpinion(current);
    // });

    // // Show the first opinion on load
    // showOpinion(current);