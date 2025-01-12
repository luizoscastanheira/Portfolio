let data = new Date();
let hora = data.getHours();

if(hora < 9 || hora > 18)
{
   console.log("Loja fechada");
}
else
{
    console.log("Loja aberta");
}