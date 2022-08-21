import axios, {AxiosResponse} from "axios";

const app = document.getElementById("app") as HTMLDivElement;

//#region exemplo promise sem funções callback
// function processarImagemComSucesso(resposta: AxiosResponse){
//   const urlImagem = URL.createObjectURL(resposta.data);

//   const img = document.createElement("img");
//   img.src = urlImagem;

//   app.appendChild(img);
// }

// function processarImagemComFalha(resposta: AxiosResponse){
//   console.log(resposta);
// }
// axios.get("https://picsum.photos/200", {responseType: "blob"})
// .then(processarImagemComSucesso)
// .catch(processarImagemComFalha);
//#endregion

//#region async function exemplo: usa os promises, é um pouco mais burocratico, porem é mais facil de visualizar
async function obterImagem(){
  try{
  const resposta = await axios.get("https://picsum.photos/200",{responseType: "blob"});
  const urlImagem = URL.createObjectURL(resposta.data);

  const img = document.createElement("img");
  img.src = urlImagem;

  app.appendChild(img);

  }catch(err)
  {
    console.log(err);
  }
  
}
obterImagem(); 
//#endregion

//#region callback hell
  // fetch("http://picsum.photos/200")
  // .then(resposta => {
  //   const blob = resposta.blob();
  //   blob.then()
  // })
  //#endregion
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
