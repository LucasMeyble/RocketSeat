//pra startar o servidor é yarn dev
const express = require('express');
const cors = require('cors');
//api de id
const {uuid, isUuid} = require('uuidv4');

const app = express();
//falando pra api que ela vai receber informações do tipo json
app.use(cors());
app.use(express.json());

const projects = [];

function logRequest (req, res, next){
  const { method , url} = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next();

  console.timeEnd();

};
function validateProjects(req, res, next){
  const { id } = req.params;

  if(!isUuid(id)){
    return res.statur(400).json({error: 'invalid project ID.'})
  }

  return next();
};

app.use(logRequest);
app.use('/projects/:id', validateProjects);


app.get('/projects', function (req, res){

  const {title} = req.query;
  //se o meu title foi preenchida pelo usuario o result prega se nao o result pega o projects 
  const results = title ? projects.filter(project => project.title.includes(title)) : projects; 
  //aqui eu listo todos os projetos criados
  return res.json(results);
})

app.post('/projects', function(req, res){
  //pegando os dados da api 
  const {title, name} = req.body;
  //criando um unico projeto com dados unicos
  const project = { id: uuid(), title, name}; 
  //colocando o projeto no array criado la em cima
  projects.push(project);
  //retornando o unico projeto criado agora
  return res.json(project); 
});

app.put('/projects/:id', function(req, res){  
  //pegar os parametros passados na url e no corpo
  const {id} = req.params;
  const {title, name} = req.body;
  //percorrer o array ate q o ids sejam iguais
  const projectIndex = projects.findIndex(project => project.id === id);
  //se o id nao existir ele da como projeto nao encontrado
  if(projectIndex < 0) {
    return res.status(400).json({error: 'Project not found'});
  }
  //criando o novo projeto
  const project = { 
    id, 
    title, 
    name      
  }
  //adcionanndo o novo projeto
  projects[projectIndex] = project;

  return res.json(project)
})

app.delete('/projects/:id', function(req, res){
  const {id} = req.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0){
    return res.status(400).json({error:'Project not found'});
  }
  //uma função do js para deletar x coisas do array, sendo x o 1
  projects.splice(projectIndex, 1);
  //o retorno vair ser nd, mas o status q aparece tem q ser 204 que significa que a operação deu certo
  return res.status(204).send()
})

app.listen(3333, function(){
  console.log(':) back-end started!');
});
