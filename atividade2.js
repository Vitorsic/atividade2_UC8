let idade = 17

if(idade >= 18) {
    console.log("Cadastro permitido!")
} else {
    console.log("cadastro não permitido")
}


let hoje = new Date().toDateString()
let dataEvento = new Date('30/12/2021').toDateString()

console.log(hoje)

if (dataEvento < hoje) {
  console.log(' cadastro  permitido!')
} else {
  console.log('Data do evento inferior a atual')
}

let totalParticipantes = 90

console.log("Quantidade de participantes inscritos até o momento:", totalParticipantes)

if(totalParticipantes <= 100){
    console.log("Quantidade permitida, cadastro permitido!")
} else {
    console.log("Máximo excedido")
}


let listaParticipantes = ["Participante 1", "Participante 2", "Participante 3", "Participante 4" , "Participante 5"]

console.log ("Relação dos participantes inscritos até o momento:")

for (let contador = 0; contador < listaParticipantes.length; contador++) {
  console.log (listaParticipantes[contador])
}

let totalPalestrantes = 20

console.log("Foram inscritos:", totalPalestrantes)

if (totalPalestrantes <= 20) {
  console.log("Quantidade de palestrantes não excedida, cadastro permitido!")
} else {
  console.log("Quantidade de participantes excedida, cadastro não permitido!")
}


let listaPalestrantes= ["Palestrante 1", "Palestrante 2", "Palestrante 3", "Palestrante 4" , "Palestrante 5"]

console.log ("Relação dos palestrantes inscritos até o momento:")

for (let contador = 0; contador < listaPalestrantes.length; contador++) {
  console.log (listaPalestrantes[contador])
}