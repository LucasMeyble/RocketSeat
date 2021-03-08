import React, { useState, useEffect } from 'react'; 
import api from './services/api';

import Header from './components/Header';

import './App.css';


function App (){
  //o useState ele recebe dois parametros o primeiro é o array, e depois o novo objeto para incluir no array
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(res => {
      setProjects(res.data);
    });
  }, []);

  async function handleAddProject() {
    //... copia o array e depois add o novo 
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const res = await api.post('projects', { 
      title: `Novo projeto ${Date.now()}`,
      name: 'Lucas'
    });

    const project = res.data;

    setProjects([...project, project]);
  }

  return (
    //esse ele mento <></> é um elemento invisivel q me proporciona chamar o header duas vezes na DOM do navegador, sem ele da um erro de sintax. Este é o conseito de frament, ou seja, criar um elemento que nao influencie ativamente no html
    <> 
      <Header title="Title"/>
        
        

        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adcionar Projeto</button>
    </>
    );
}

export default App;