/*
var num1;

let num2;

num3 = 3;

const pi = 3.14

aritmeticos => + - * / \\ % ** ++ --
logicos => && || !
comparação => > < >= <= != == === 
atribuição => += -= *= /=
*/

function boasVindas() {
    //alert("Fatal error.")
    //document.write("Seja bem vindo!!!")
}

function somar() {
    //Valor1 = parseInt(document.frmCalc.txtValor1.value);
    //Valor2 = parseInt(document.getElementById("txtValor2").value);

    Valor1 = document.getElementById("txtValor1");
    Valor2 = document.getElementById("txtValor2");
    result = document.getElementById("result");

    if (Valor1.value == "") {
        alert("Campo obrigatório");
        Valor1.focus();
        return false;
    }

    soma = parseInt(Valor1.value) + parseInt(Valor2.value);
    result.innerText = soma;

    //document.write(soma);
}