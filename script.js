let modalShow = document.querySelector("#modal-show");
let modalClose = document.querySelector("#modal-close");
let modalSuccess = document.querySelector("#modal-success");
let modal = document.querySelector("#modal")

modalShow.addEventListener("click", function(){
    modal.classList.toggle("active")
})

modalSuccess.addEventListener("click", function(){
    modal.classList.toggle("active");
})

modalClose.addEventListener("click", function () {
  modal.classList.toggle("active");
});

let links = document.querySelectorAll(".nav-element-link");
let menuBtn = document.querySelector("#menu-btn");
let menuClose = document.querySelector("#menu-close");
let menu = document.querySelector("#menu");

function removeActive(){
  links.forEach(link => {
    link.classList.remove("active");
  });
}

links.forEach(link => {
  link.addEventListener("click", function(){
    removeActive();
    link.classList.toggle("active");
    menu.classList.toggle("active");
  })
})

menuBtn.addEventListener("click", function(){
  menu.classList.toggle("active")
})

menuClose.addEventListener("click", function () {
  menu.classList.toggle("active");
});

document.querySelector(".show-float").addEventListener("click", function(){
  if (!document.querySelector(".float-display").classList.contains("active")){
    document.querySelector(".show-float").textContent = "Hide Float Button"
  }else{
    document.querySelector(".show-float").textContent = "Show Float Button";
  }
  document.querySelector(".float-display").classList.toggle("active");
})