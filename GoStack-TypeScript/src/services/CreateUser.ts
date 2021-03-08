//a interface serve para eu diser qual a tipagem da variavel em questao 

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  //techs pode ser um array que recebe string ou a config do TechObject
  techs: Array<string | TechObject>;
  //forma de se tipar quando so tiver um array com todos os elementos de mesma tipagem
  //techs: string[]
}

export default function CreateUser ({ name, email, password}: CreateUserData) {
  const user = {
    name, 
    email,
    password,
    
  };

  return user;
}