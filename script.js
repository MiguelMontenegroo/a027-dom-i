const frutas = ["laranja", "limão", "uva"];
const container = document.getElementById("fruta-1")
    container.innerHTML = "laranja"
    const container2 = document.getElementById("fruta-2")
    container2.innerHTML = "limão"
    const container3 = document.getElementById("fruta-3")
    container3.innerHTML = "uva"

const inclusao = () => {
    const resposta1 = document.getElementById("texto").value
    frutas.push(resposta1)
    const fruta = document.getElementById("fruta-4")
    fruta.innerHTML = frutas[3]

}
console.log(document.getElementById("texto").value)

let resposta = document.getElementById("texto").value
console.log(resposta)
