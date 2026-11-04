
// ==========================
// TEMAS
// ==========================
const themeSelect = document.getElementById("seletor-tema");

function changeTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
}

const savedTheme = localStorage.getItem("selectedTheme") || "light";
changeTheme(savedTheme);

if (themeSelect) {
    themeSelect.value = savedTheme;
    themeSelect.addEventListener("change", function () {
        changeTheme(this.value);
    });
}

// ==========================
// CABEÇALHO COMPACTO AO ROLAR
// ==========================
const header = document.getElementById("topo");
let compacto = false;

// Mantém o conteúdo sempre por baixo do cabeçalho
function ajustarEspaco() {
    if (!compacto) {
        document.body.style.paddingTop = header.offsetHeight + "px";
    }
}

// Atualiza o espaço sempre que a altura do cabeçalho muda
new ResizeObserver(ajustarEspaco).observe(header);
window.addEventListener("load", ajustarEspaco);
window.addEventListener("resize", ajustarEspaco);

function atualizarHeader() {
    const y = window.scrollY;

    if (!compacto && y > 150) {
        compacto = true;               // primeiro bloqueia o ajuste do espaço
        header.classList.add("compacto");
    } else if (compacto && y < 20) {
        compacto = false;              // depois volta a seguir a altura real
        header.classList.remove("compacto");
        ajustarEspaco();
    }
}

window.addEventListener("scroll", atualizarHeader);
ajustarEspaco();
atualizarHeader();