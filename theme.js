
// Selecionar o elemento HTML
const themeSelect = document.getElementById("themeSelect");

// Aplicar o tema
function changeTheme(theme) {
    document.body.setAttribute("data-theme", theme);

    // Guardar a preferência do visitante
    localStorage.setItem("selectedTheme", theme);
}

// Recuperar o tema guardado
const savedTheme = localStorage.getItem("selectedTheme") || "light";

// Aplicar o tema quando a página abrir
themeSelect.value = savedTheme;
changeTheme(savedTheme);

// Mudar o tema quando o visitante escolher outro
themeSelect.addEventListener("change", function () {
    changeTheme(this.value);
});
