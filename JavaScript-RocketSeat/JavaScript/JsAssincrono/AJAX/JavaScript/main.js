var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/lucasmeyble'); //aqui eu pego os dados da api do git hub
xhr.send(null);

// a pagina so é renderisada quando o readyState for igual a 4
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}