const inptNumber = document.getElementById("inptNumber");
inptNumber.addEventListener("keydown", (e) => {
    const expre = /[0-9Kk]/; // Asegúrate de que la expresión regular incluya tanto "K" en mayúscula como en minúscula
    if (!expre.test(e.key)) e.preventDefault();
});
