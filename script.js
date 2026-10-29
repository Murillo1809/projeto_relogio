
let horario = document.getElementById("horario");
let idade = document.getElementById("idade");
let verificar = document.getElementById("verificar");
let resultado = document.getElementById("resultado");
let mudarTema = document.getElementById("mudarTema");

// Horário atual de Brasília
function atualizarHorario() {
    const agora = new Date();

    horario.textContent = agora.toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

atualizarHorario();
setInterval(atualizarHorario, 1000);

// Verificar idade para entrar no evento
verificar.addEventListener("click", function () {
    const valor = idade.value;

    if (valor.trim() === "" || Number(valor) < 0) {
        resultado.textContent = "Digite uma idade válida.";
    } else if (Number(valor) >= 18) {
        resultado.textContent = "Entrada permitida!";
    } else {
        resultado.textContent = "Entrada não permitida. Menor de 18 anos.";
    }
});

// Mudar o tema do site
mudarTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");
});
