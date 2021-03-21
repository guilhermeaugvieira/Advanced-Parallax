var layer1 = document.getElementById('layer1'); //Refefencia o elemento layer 1

scroll = window.pageYOffset; //Recebe o valor vertical do scroll sempre que alterado

document.addEventListener('scroll', function (e){ //Adiciona um evento a página, associando o evento do scroll
  var offset = window.pageYOffset; //Atualiza o valor de offset
  scroll = offset; //Atribui o valor de offset no scroll
  layer1.style.width = (100 + scroll/5) + '%';
});

//Realiza o mesmo procedimento com a layer 2
var layer2 = document.getElementById('layer2'); //Refefencia o elemento layer 1

scroll = window.pageYOffset; //Recebe o valor vertical do scroll sempre que alterado

document.addEventListener('scroll', function (e){ //Adiciona um evento a página, associando o evento do scroll
  var offset = window.pageYOffset; //Atualiza o valor de offset
  scroll = offset; //Atribui o valor de offset no scroll
  layer2.style.width = (100 + scroll/5) + '%';
  layer2.style.left = (scroll/50) + '%';
});

//Realiza o mesmo procedimento com o texto
var text = document.getElementById('text'); //Refefencia o elemento layer 1
console.log(text);

scroll = window.pageYOffset; //Recebe o valor vertical do scroll sempre que alterado

document.addEventListener('scroll', function (e){ //Adiciona um evento a página, associando o evento do scroll
  var offset = window.pageYOffset; //Atualiza o valor de offset
  scroll = offset; //Atribui o valor de offset no scroll
  text.style.top = - (scroll/10) + '%';
});