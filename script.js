// ==========================
// Typing Effect
// ==========================

const text =
"Website kecil ini dibuat khusus untuk seseorang yang sangat spesial. Semoga setiap kali membukanya, kamu selalu tersenyum. ❤️";

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();


// ==========================
// Background Stars
// ==========================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = innerWidth;
    canvas.height = innerHeight;

}

resize();

window.addEventListener("resize",resize);

const stars=[];

for(let i=0;i<200;i++){

    stars.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        s:Math.random()*0.8+0.2

    });

}

function animateStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

        ctx.fill();

        star.y += star.s;

        if(star.y > canvas.height){

            star.y = 0;

            star.x = Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(animateStars);

}

animateStars();


// ==========================
// Lightbox Gallery
// ==========================

const images=document.querySelectorAll(".grid img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

const close=document.getElementById("closeLightbox");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src=img.src;

    });

});

close.onclick=()=>{

    lightbox.classList.remove("show");

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

};

// ==========================
// Envelope
// ==========================

const openLetter = document.getElementById("openLetter");

const envelope = document.getElementById("envelope");

openLetter.onclick = () => {

    document.querySelector(".letter-section")
        .scrollIntoView({
            behavior:"smooth"
        });

    setTimeout(()=>{

        envelope.classList.add("open");

    },700);

};

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            sec.classList.add("show");
        }
    });
});

const loveBtn = document.getElementById("loveBtn");
const lastMessage = document.getElementById("lastMessage");

loveBtn.addEventListener("click", () => {
    lastMessage.innerHTML = "❤️ Aku sayang kamu, Fin. Terima kasih sudah menjadi bagian dari hidupku. ❤️";
});

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){
        music.play();
        musicBtn.innerHTML = "⏸️";
        playing = true;
    }else{
        music.pause();
        musicBtn.innerHTML = "🎵";
        playing = false;
    }

});

const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click",()=>{

    music.play();

    welcome.classList.add("hide");

});

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="9999";
    heart.style.transition="3s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.transform="translateY(-120vh)";
        heart.style.opacity="0";
    },10);

    setTimeout(()=>{
        heart.remove();
    },3000);

}