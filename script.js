console.log("Portfolio Loaded 🚀");
AOS.init({

duration:1200,

once:false

});

new Typed("#typing",{

strings:[

"Python Developer",

"FastAPI Developer",

"Backend Engineer",

"AI Enthusiast"

],

typeSpeed:80,

backSpeed:50,

loop:true

});

VanillaTilt.init(document.querySelectorAll(".card"),{

max:20,

speed:500,

glare:true,

"max-glare":0.5

});

VanillaTilt.init(document.querySelectorAll(".project"),{

max:20,

speed:500

});

particlesJS("particles-js",{

particles:{

number:{value:100},

color:{value:"#00bfff"},

shape:{type:"circle"},

opacity:{value:.5},

size:{value:3},

line_linked:{

enable:true,

distance:150,

color:"#00bfff"

},

move:{

enable:true,

speed:2

}

}

});

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML='<i class="fas fa-times"></i>';

    }else{

        menuBtn.innerHTML='<i class="fas fa-bars"></i>';

    }

}

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.onclick=()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML='<i class="fas fa-bars"></i>';

    }

});