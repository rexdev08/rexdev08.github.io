


//declaracionnde variables y funciones
const $settingsWrapper = document.querySelector(".settings-wrapper"); 
const $openSettingsBtn = document.getElementById("open-settings");
const $light = document.getElementById("light");
const $dark = document.getElementById("dark");
const $btnMenu = document.getElementById("btn-menu")
const $headerNav = document.querySelector(".header__nav")
const $aboutCard = document.querySelector(".about__card")
const $aboutSkills = document.querySelector(".about__skills")
const $projectsWrapper = document.querySelectorAll(".projects__wrapper")






$btnMenu.addEventListener("click", ()=>{
 
  $headerNav.classList.toggle("header__nav--active")
})

$settingsWrapper.addEventListener("click", (e)=>{
//  console.log(e.target)
  if(e.target && e.target.id === "open-settings"){
    $settingsWrapper.classList.add("settings-wrapper--open")
  } else if (e.target && e.target.id === "close-settings"){
    $settingsWrapper.classList.remove("settings-wrapper--open")
  } 
})

$light.addEventListener("click", ()=>{
    document.body.classList.add("light-mode")
    $dark.classList.remove("settings__button--active")
    $light.classList.add("settings__button--active")
})
$dark.addEventListener("click", ()=>{
    document.body.classList.remove("light-mode")
    $light.classList.remove("settings__button--active")
    $dark.classList.add("settings__button--active")
})

$headerNav.addEventListener("click", (e)=>{
  if(e.target && e.target.classList.contains("header__link")){
    $headerNav.classList.remove("header__nav--active");
  }
})

const options = {
  root:null,
  rootMargin: "0px 100px",
  threshold: .8
}


const callback = (entries)=> {
  entries.forEach(entrie => {
   
    if(entrie.isIntersecting){
      entrie.target.classList.add("active")
    }
  })
}

const observer = new IntersectionObserver(callback, options)
observer.observe($aboutCard);
observer.observe($aboutSkills);
$projectsWrapper.forEach(project =>{
  observer.observe(project);
})
