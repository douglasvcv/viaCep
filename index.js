async function Cep(cep) {
  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      if (!response.ok) {
       throw new Error("Resposta da rede não foi bem-sucedida")
      }
     return  response.json();
    })
    .then(
        data=>{
            console.log(data)
        }
    )
    .catch(
        (error) => {
      console.log(`Erro na requisição: ${error}`);
    });
}

//what is diference?

Cep("63101065")