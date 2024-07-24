let input = String( document.getElementById("cepInput"))
let button = document.getElementById("buttonCLick")
let span = document.getElementById("responseSpan")

button.addEventListener('click',async (event)=>{
 let response = await Cep(input)
 console.log(response)
  span.innerText = `${{response}}`
})

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

