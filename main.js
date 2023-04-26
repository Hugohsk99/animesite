
//
/*
function myFunction() {
    console.log("Hello World!");
  }
  myFunction()
  ;
*/

// declarar funções
/*
const soma = function(){
    console.log('teste');
}
*/


/*
const dado = function(){
    console.log('teste');
}

//função com parametros

function executaFuncao(funcao){
    funcao();
}

setInterval(executaFuncao, 1000);

function executaFuncao() {
  const date = new Date();
document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
*/


/* const funcaoArrow = ()=>{
    console.log('teste')
}

funcaoArrow();

 */

let show = function(){
    console.log('teste');
};

show();

// função e objeto
const objeto = {
    falar: function(){
        console.log('falai')
    },
    id: 123,
    nome:'hugo'
};

objeto.falar();

//Es6 =>

const obj = {
    falar (){
        console.log('falando')
    }
}

obj.falar();

function teste(){
    console.log('hello')
}


//enviando um argumento para suprir um parâmetro

function funcao(name){
    let nome = '';
    console.log(name,arguments)
}

funcao('Valor', 0);

//Criar uma função de cada operacao matematica
//que vai receber tres valores
// e retornar o calculo desses valores
//+ -* /
//^^

function soma(){
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = document.getElementById("txt3").value;
    var s4 = s1+s2+s4;
}
alert(s4);


