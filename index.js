
window.alert("Seja bem vindo a minha Tabuada")

function tabuada(){
    let num = document.getElementById('num') // capturando valor 1
    let end = document.getElementById('end') // capturando valor 2

    if(num.value.length == 0 || end.value.length == 0){
        window.alert('[ERROR] Confira os Valores!')
    } else{

    let n = Number(num.value) // transformando as strings que capturei em valores
    let e = Number(end.value) // transformando as strings que capturei em valores
    var x = 0  //quantia em que se iniciara oa multiplicação
    var r = '' //resultado inicialmente em branco
    var res = document.getElementById('resposta') //capturando a id 'resposta'
    res.innerHTML = `A tabuada do ${n} é: <br> ` // alterando o trecho preencha os valores a cima

    do {
        r = n*x  // resultado sera o valor de N * X
        res.innerHTML += `${x} X ${n} = ${r} <br>`   
        x++
    } while (x <= e);

    }
}
