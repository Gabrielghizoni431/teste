//const firtname = "Gabriel"
//const anotherName = 1
//const x = true
//function greeting(name: string){
//    console.log("Ola "+ name)
//}
//greeting(firtname)
var nome = "gabriel";
var idade = 19;
var telefone = 997107122;
var ativo = false;
function Usuario(name, age, telephone, status) {
    console.log(name);
    console.log(age);
    console.log(telephone);
    if (status == true) {
        console.log("Usuario ativo");
    }
    else {
        console.log("Usuario inativo");
    }
}
Usuario(nome, idade, telefone, ativo);
