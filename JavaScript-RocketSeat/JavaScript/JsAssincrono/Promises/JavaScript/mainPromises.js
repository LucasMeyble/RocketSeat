//o promises vai retorar valores de sucesso ou erro, mas em tempos diferentes, ou seja, o js vaiexecutar mesmo q o resultado so venha depois de um tempo 

var minhaPromise = function (){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/lucasmeyble');
    xhr.send(null);

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        //esse if é pra ver se a requisição da api deu certo, se deu ele retorna o status 200
        if(xhr.status === 200){
          resolve(JSON.parse(xhr.responseText));
        }else{
          reject('erro na requisição')
        }
      }
    }
  });
};

minhaPromise()
.then(function(response){
  console.log(response);
})
.catch(function(error){
  console.warn(error);
});

