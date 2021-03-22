var layer1 = document.getElementById('layer1'); //Refefencia o elemento layer 1
var layer2 = document.getElementById('layer2'); //Refefencia o elemento layer 1
var text = document.getElementById('text'); //Refefencia o elemento layer text

scroll = window.pageYOffset; //Recebe o valor vertical do scroll sempre que alterado

document.addEventListener('scroll', function (e){ //Adiciona um evento a página, associando o evento do scroll
  scroll = window.pageYOffset; //Atribui o valor do scroll
  layer1.style.width = (100 + scroll/5) + '%';
  layer2.style.width = (100 + scroll/5) + '%';
  layer2.style.left = (scroll/50) + '%';
  text.style.top = - (scroll/10) + '%';
});