import axios from "axios";

export async function payment(dados,user,tipo,cpf){
console.log(user)

const options = {

    headers: {
      "x-picpay-token":'4ef6cd01-d146-4f03-9a73-4d14197be6ac'
  }
}

function createReferenceId(){
  var testeData = Date();
  const returnData = testeData.split(" ")


 const formtaingdata =  returnData[2]+returnData[3]+returnData[4];
 const finalData = formtaingdata.replace(":","")
 return 22+finalData.replace(":","")
}

function dataAtual() {
  var d = (new Date() + '').split(' ');
  d[2] = d[2] + ',';

  return [d[0], d[1], d[2], d[3]].join(' ');
}
function createExpiresAt(){
  var time = new Date();
  var outraData = new Date();


  outraData.setDate(time.getDate() + 5); // Adiciona 3 dias
  const dataString = JSON.stringify(outraData)
  const dataSemT = dataString.split("T")
 return dataSemT[0].replace('"','')+"T16:00:00-03:00"

}

console.log(cpf)

try {
  const {data} = await axios.post('https://appws.picpay.com/ecommerce/public/payments',{
  "referenceId": createReferenceId(),
  "callbackUrl": "https://portalidea.com.br/aluno/picpay/status-picpay.php",
  "value":tipo==='digital'?39.90:59.90,
  "expiresAt": createExpiresAt(),
  "channel": "my-channel",
  "purchaseMode": "in-store",
  "buyer": {
    "firstName": dados.nome,
    "lastName": dados.sobreNome,
    "document":cpf,
    "email": dados.email,
    "phone": "+55 27 12345-6789"
  }
},options)
if(data){

  const response = await axios.post('https://portalidea.com.br/api/insere-pagamento-picpay.php',{
    idaluno:dados.idS_aluno,
    valor:tipo==='digital'?'39.90':'59.90',
    data:dataAtual(),
    tipocert:tipo,
    referencia:createReferenceId()

  })

  console.log(response.data)

 if(response.data.mensagem==="Inserido com sucesso"){
   return true
 }

  //inserir tentativa de pagamento na Rota

}
} catch (error) {
  console.log(error)
}






}
