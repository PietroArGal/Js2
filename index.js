const numeroAleatorio = Math.ceil(Math.random() * 100);

function adivinarNumero() {
    const numeroIntroducido = parseInt(document.getElementById("numero").value);

    if (numeroIntroducido === numeroAleatorio) {
        document.getElementById("resultado").innerText = "¡Felicidades, has acertado!";
    } else if (numeroIntroducido > numeroAleatorio) {
        document.getElementById("resultado").innerText = "El número es demasiado alto. Prueba de nuevo.";
    } else {
        document.getElementById("resultado").innerText = "El número es demasiado bajo. Prueba de nuevo.";
    }
}