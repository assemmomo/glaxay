let loginPage = document.querySelector(".loginPage");
let loginBtn = document.querySelector(".loginBtn");
let closeLogin = document.querySelector(".closeLogin");
let loginForm = document.querySelector(".loginForm");
let loginH2 = document.querySelector(".loginH2");
let rocket1 = document.querySelector(".rocket1");
let rocket2 = document.querySelector(".rocket2");
let up = document.querySelector(".up");
let optionPage = document.querySelector(".optionPage");
let optionBtn = document.querySelector(".optionBtn");
let closeOption = document.querySelector(".closeOption");
let planets = document.getElementsByClassName("planet");
let leftSlider = document.querySelector(".leftSlider");
let rightSlider = document.querySelector(".rightSlider");


let planetNum = 1;

loginBtn.onclick=function(){
    loginPage.style.cssText="width:50%;height:50%;";
    closeLogin.style.display="block";
    loginH2.style.display="block";
    loginForm.style.display="grid";
}

closeLogin.onclick=function(){
    loginPage.style.cssText="width:0%;height:0%;";
    closeLogin.style.display="none";
    loginForm.style.display="none";
    loginH2.style.display="none";
    // setTimeout(function(){
    //     loginPage.style.cssText="display:none;";
    // },300)
}
setInterval(function(){
    if(window.scrollY > 2650 & window.scrollY < 6200){
        rocket1.style.left="-70px";
        rocket2.style.right="-70px";
    }else{
        rocket1.style.left="-700px";
        rocket2.style.right="-700px";
    }

    if(window.scrollY > 800){
        up.style.display="flex";
    }else{
        up.style.display="none";
    }
},100)

optionBtn.onclick=function(){
    optionPage.style.right="0px";
}
closeOption.onclick=function(){
    optionPage.style.right="-600px";
}

rightSlider.addEventListener("click",function(){
    if (planetNum < 3) {
        planetNum += 1;
        console.log("sss")
    }else if(planetNum = 3){
        planetNum = 1;
    }
});
leftSlider.addEventListener("click",function(){
    if (planetNum > 1) {
        planetNum -= 1;
        console.log("sss")
    }else if(planetNum = 1){
        planetNum = 3;
    }
})

setInterval(function(){
    if(planetNum == 1){
        planets[0].style.left="0%";
        planets[1].style.left="100%";
        planets[2].style.left="100%";
    }
    if(planetNum == 2){
        planets[0].style.left="100%";
        planets[1].style.left="0%";
        planets[2].style.left="100%";
    }
    if(planetNum == 3){
        planets[0].style.left="100%";
        planets[1].style.left="100%";
        planets[2].style.left="0%";
    }
},100)