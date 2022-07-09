
/*
const http = require('http');
const { callbackify } = require('util');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/

//CallBack


/*
const fs = require('fs')
console.log('Primeiro texto')
fs.readFile('./Node-day-one/texto.txt', callback)
function callback(err,  conteudo){
 if(err){
  return console.error(err)
 }
 console.log(String(conteudo))
}
console.log('Segundo texto.')
console.log('Terceiro texto.')
*/



//JavaScript assincrono 

/*
setTimeout(funcao,3000)

function funcao(){
  console.log("A CADA 3 S VOCÉ É CORNO")

}

*/

//Desafio 3

function mostraData(){
  const data = new Date();
  let Day = "14/06/22"
  console.log('Hoje é: '+ Day + data.getDay() + ' - ' + data.getHours() + ' : ' + data.getMinutes() + ' : ' + data.getSeconds())
}

setInterval(mostraData, 5000)

