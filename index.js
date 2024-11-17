let input = document.getElementById("cepInput")
let button = document.getElementById("buttonCLick")
let span = document.getElementById("responseSpan")


async function Cep(cep) {
  try{
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    if(!response.ok){
      throw new Error("Resposta da rede não foi bem-sucedida")
    }
    const data = await response.json()
    return data
  }catch(error){
    console.log(`Erro na requisição ${error}`)
    return null
  }
  }
  
  button.addEventListener('click',async (event)=>{
   let response = await Cep(input.value)
    if(response){
      console.log(response.logradouro)
      span.innerText= `A rua é: ${response.logradouro}`
    }else{
      span.innerText = `Endereço não encontrado. Por favor, verificar o CEP`
    }
  })
 
