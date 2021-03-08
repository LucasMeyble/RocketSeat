//exercicio 1
    var endereco = {
      rua: "Rua dos pinheiros",
      numero: 1234,
      bairro: "Centro",
      cidade: "São Paulo",
      uf: "SP",
    };

    console.log(
      "O usuário mora em " +
        endereco.cidade +
        "/" +
        endereco.uf +
        ", no bairro " +
        endereco.bairro +
        ", na rua " +
        endereco.rua +
        "com nº " +
        endereco.numero +
        "."
    );
//--------------------------------------------------------------------

//exercicio 2
    function pares(x, y) {
      for (i = x; i <= y; i++) {
        if (i % 2 === 0) {
          console.log(i);
        }
      }
    }

    pares(32, 321);
//------------------------------------------------------------------------------

//exercicio 3
    function temHabilidade(skills) {
      var habilidade = ["Javascript", "ReactJS", "React Native"];
      var elemento = "Javascript";
      var idx = habilidade.indexOf("Javascript");

      if (idx !== -1) {
        return console.log("true");
      } else {
        return console.log("false");
      }
    }

    var skills = ["Javascript", "ReactJS", "React Native"];

    temHabilidade(skills); 
//----------------------------------------------------------------------------    
//exercicio 4
    function experiencia (anos){
      if(anos >= 7){
        console.log("Jedi Master");
      } else if(anos <=6 && anos >=3){
        console.log("Avançado");
      } else if(anos <= 3 && anos >= 1){
        console.log("Intermediario");
      } else if(anos <=1 && anos >= 0){
        console.log("Iniciante");
      }
    }

    var anorEstudo = 2;
    experiencia(anorEstudo);
//----------------------------------------------------------------------------

//exercicio 5
    var usuarios = [
      {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"],
      },
      {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
      }
    ];

    for (var user of usuarios) {
      var { nome, habilidades } = user;
      console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`);
    }
//------------------------------------------------------------------------------