import axios, {AxiosResponse} from "axios";

const app = document.getElementById("app") as HTMLDivElement;

function processarImagemComSucesso(resposta: AxiosResponse){
  const urlImagem = URL.createObjectURL(resposta.data);

  const img = document.createElement("img");
  img.src = urlImagem;

  app.appendChild(img);
}

function processarImagemComFalha(resposta: AxiosResponse){
  console.log(resposta);
}
axios.get("http://picsum.photos/200", {responseType: "blob"})
  .then(processarImagemComSucesso)
  .catch(processarImagemComFalha);

//#region ------>>> Primeiro exemplo de promises

// function executarFuncaoLonga(): string|undefined{
//   return "ola mundooo!";
// };
// const promise = new Promise<string>((resolve,reject) => {
//   //operação que pode tomar BASTANTE tempo
//   const resposta = executarFuncaoLonga();//undefined
  
//   if(resposta)
//     resolve(resposta);
//   else
//     reject("Resposta não encontrada");
// })

// promise.then(resposta => console.log(resposta)).catch(msg=> console.log(msg));
//#endregion
