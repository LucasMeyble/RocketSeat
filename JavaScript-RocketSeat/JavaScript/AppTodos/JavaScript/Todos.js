var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//pega os itens do list_todos que estao salvos no localStorage
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderElement() {
  //aqui eu faço isso pra ele pregar todos os intens do 
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement("a");
    linkElement.setAttribute("href",'#')

    var posicao = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo('+posicao+');');

    var linkText = document.createTextNode('Excluir');
    
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderElement();

function addTodo(){
  var text = inputElement.value;  

  todos.push(text);
  //limpo o imput assim q eu apertar o botao
  inputElement.value = '';
  renderElement();
  saveTodo();
};

buttonElement.onclick = addTodo;

function deleteTodo(pos){
  //aqui eu deleto um elemento que esta na posição pos
  todos.splice(pos, 1);
  renderElement();
  saveTodo();
}

//o json é usado para transformar o array em string com formato de JSON
function saveTodo(){

  localStorage.setItem('list_todos', JSON.stringify(todos));

}
