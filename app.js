//declaracionnde variables y funciones
const $settingsWrapper = document.querySelector(".settings-wrapper");
const $openSettingsBtn = document.getElementById("open-settings");
const $light = document.getElementById("light");
const $dark = document.getElementById("dark");
const $btnMenu = document.getElementById("btn-menu");
const $headerNav = document.querySelector(".header__nav");
const $aboutCard = document.querySelector(".about__card");
const $aboutSkills = document.querySelector(".about__skills");
const $projectsWrapper = document.querySelectorAll(".projects__wrapper");

$btnMenu.addEventListener("click", () => {
  $headerNav.classList.toggle("header__nav--active");
});

$settingsWrapper.addEventListener("click", (e) => {
  //  console.log(e.target)
  if (e.target && e.target.id === "open-settings") {
    $settingsWrapper.classList.add("settings-wrapper--open");
  } else if (e.target && e.target.id === "close-settings") {
    $settingsWrapper.classList.remove("settings-wrapper--open");
  }
});

$light.addEventListener("click", () => {
  document.body.classList.add("light-mode");
  $dark.classList.remove("settings__button--active");
  $light.classList.add("settings__button--active");
});
$dark.addEventListener("click", () => {
  document.body.classList.remove("light-mode");
  $light.classList.remove("settings__button--active");
  $dark.classList.add("settings__button--active");
});

$headerNav.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("header__link")) {
    $headerNav.classList.remove("header__nav--active");
  }
});

const options = {
  root: null,
  rootMargin: "0px 100px",
  threshold: 0.8,
};

const callback = (entries) => {
  entries.forEach((entrie) => {
    if (entrie.isIntersecting) {
      entrie.target.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe($aboutCard);
observer.observe($aboutSkills);
$projectsWrapper.forEach((project) => {
  observer.observe(project);
});

// envio de formulario

const form = document.getElementById("form");
const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://sheet.best/api/sheets/c3be8f52-9d27-481d-b9d2-39d9c6f2f8da", {
    method:"POST",
    mode:"cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "name": form.name.value,
      "email": form.email.value,
      "subject": form.subject.value,
      "message": form.message.value
    })
  });


      form.name.value=""
      form.email.value=""
      form.subject.value=""
      form.message.value=""
      submit.style.backgroundColor = "green"
      submit.value = "Enviado"

      setTimeout(()=>{
        submit.style.backgroundColor = "#3997f7"
        submit.value = "Enviar"
      }, 3000)

});
