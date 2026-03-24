const nome:string="gabriel"
const idade:number=19
const telefone:number=997107122
const ativo:boolean= false

function Usuario(
    name:string, 
    age:number , 
    telephone:number, 
    status:boolean){

        console.log(name)
        console.log(age)
        console.log(telephone)
    
        if (status == true){
            console.log("Usuario ativo")
        }
    
        else{
            console.log("Usuario inativo")
        }
     
}

Usuario(nome , idade , telefone, ativo)


