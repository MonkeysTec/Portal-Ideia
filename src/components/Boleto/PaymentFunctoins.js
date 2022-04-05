import axios from 'axios'
async function  generatedBoleto(dados,address){

  console.log(dados)
  console.log(address.DadosAluno[0])
  var str = address.DadosAluno[0].cep.replace("-", "").replace(".", "");

try {
  const res = await axios.post('https://sandbox.api.pagseguro.com/charges', {
    "reference_id": "ex-00001",
    "description": "Motivo da cobrança",
    "amount": {
      "value": 1000,
      "currency": "BRL"
    },
    "payment_method": {
      "type": "BOLETO",
      "boleto": {
        "due_date": "2022-05-08",
        "instruction_lines": {
          "line_1": "Pagamento processado para DESC Fatura",
          "line_2": "Via PagSeguro"
        },
        "holder": {
          "name": dados.nome,
          "tax_id": "22222222222",
          "email": dados.email,
          "address": {
            "country": "Brasil",
            "region": address.DadosAluno[0].uf,
            "region_code": address.DadosAluno[0].uf,
            "city": address.DadosAluno[0].cidade,
            "postal_code": str,
            "street": address.DadosAluno[0].endereco,
            "number": address.DadosAluno[0].numero,
            "locality": address.DadosAluno[0].bairro
          }
        }
      }
    },
    "notification_urls": [
      "https://yourserver.com/nas_ecommerce/277be731-3b7c-4dac-8c4e-4c3f4a1fdc46/"
    ]
  }
  , {
    headers: {
    Authorization:'Bearer FA5ED40EB5574DFC861C0A584FDBDCF6'
  }})


  console.log('BOLETOOOOOO',res.data)
  return res.data




} catch (error) {
  console.log(error)
}
}
export default generatedBoleto;
