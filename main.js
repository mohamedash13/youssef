







// movable background circles


let circles1 = document.getElementById("one")
let circles2 = document.getElementById("two")

        
setInterval(() => {
    for (let i = 0; i < circles1.children.length; i++) {
            circles1.children[i].setAttribute("cx",+circles1.children[i].getAttribute("cx") + Math.random(1000)*50 + "")
            circles1.children[i].setAttribute("cy",+circles1.children[i].getAttribute("cy") + Math.random(1000)*50 + "")
            circles2.children[i].setAttribute("cx",+circles2.children[i].getAttribute("cx") + Math.random(1000)*50 + "")
            circles2.children[i].setAttribute("cy",+circles2.children[i].getAttribute("cy") + Math.random(1000)*50 + "")
    }
}, 1000);
setInterval(() => {
    for (let i = 0; i < circles1.children.length; i++) {
            circles1.children[i].setAttribute("cx",+circles1.children[i].getAttribute("cx") - Math.random(1000)*100 + "")
            circles1.children[i].setAttribute("cy",+circles1.children[i].getAttribute("cy") - Math.random(1000)*100 + "")
            circles2.children[i].setAttribute("cx",+circles2.children[i].getAttribute("cx") - Math.random(1000)*100 + "")
            circles2.children[i].setAttribute("cy",+circles2.children[i].getAttribute("cy") - Math.random(1000)*100 + "")
    }
}, 2000);




// nav btn on header
let linkContainer = document.querySelector('.link-cont')
let btn = document.querySelector('.link-cont img')
let links = document.querySelectorAll('.link-cont a')
let linkBack = document.querySelector('.back')





btn.addEventListener("click", () => {
    linkBack.classList.toggle("active4")
    linkContainer.classList.toggle("active")
    btn.classList.toggle("active2")
    for (let i = 0; i < 2; i++) {
    links[i].classList.toggle("active3") 
    }


    if (btn.classList.contains("active2")) {
        btn.src="icon-close.svg"
    }else{
        btn.src="icon-hamburger.svg"
    }
})






// slider songs

let arrow1 = document.querySelector(".arrow1")
let arrow2 = document.querySelector(".arrow2")

let songCont = document.querySelector(".song-cont")

let count1 = 0
arrow2.addEventListener("click",()=>{
    count1 += 1
    if (count1 == 3) {
        count1 = 0
    }
    arrow2.href = `#${songCont.children[count1].id}`



})
let count2 = 3
arrow1.addEventListener("click",()=>{
    count2 -= 1
    if (count2 == -1) {
        count2 = 3
    }
    arrow1.href = `#${songCont.children[count2].id}`
})
