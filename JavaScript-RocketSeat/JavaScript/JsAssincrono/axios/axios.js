//com o axios eu consigo lincar um api muito mais facil e com menos codigo e ter o mesmo resultado de um XMLHttpRequest

axios.get('https://api.github.com/users/lucasmeyble')
.then(function(response) {
  console.log(response);
})
.catch(function(error){
  console.log(error);
})