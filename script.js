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
    if(window.scrollY > 2650){
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