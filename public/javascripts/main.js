// Updates the copyright year in footer with the current year
const year = document.querySelector('#current-year');
year.innerHTML = new Date().getFullYear();

document.querySelector(".goBack").addEventListener("click", function() {
    window.history.go(-1);
});