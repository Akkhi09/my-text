// const carro = {
//   marca: "Ford",
//   modelo: "ka",
//   ano: 2025,
//   placa: "ABC-4321",
//   // metodos
//   buzina: function ()
//   {
//     alert("Biiiiiiiiiiii")
//   },
//   completo: function ()
//   {
//     return "A marca é "+ this.marca+" e o modelo é: "+this.modelo
//   }
// };
// carro.buzina()
// console.log(carro["ano"])
// console.log(carro.completo())

// funcao onclick()
function evento() {
  // alert("acionou um evento de clique");
  document.body.style.backgroundColor = "yellow";
}
function eventodblclick()
{
  alert("Click duplo");
}
function vermelho()
{
  let div = document.getElementById("teste");
  div.style.backgroundColor = "red";
}
function volta_azul()
{
  let div = document.getElementById("teste");
  div.style.backgroundColor = "blue";
}
// onmousemove="add_text()
function add_text()
{
  let p = document.getElementById("texto");
  p.append('O mouse moveu <br>');
}
// onmouseup="alert('soltou o clique');"
// clicando na tela
// onmousedown="alert('clicou na tela');"
function limpar_text()
{
  document.getElementById("input").value = "";
}
function mudou()
{
  console.log("Mudou");
}
function pressionada()
{
  let input = document.getElementById("input").value;
  console.log(input);
}