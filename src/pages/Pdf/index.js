import * as React from 'react';
import { View, StyleSheet, Button, Platform, Text } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import htmll from './teste.html'
import { manipulateAsync } from 'expo-image-manipulator';
import { Asset } from 'expo-asset';
import axios from 'axios';
async function generateHTML() {



  const response = await axios.post('https://portalidea.com.br/api/certificado.php', {
    "idaluno":"855459",
	"idcurso":"6"
  })

  console.log(response.data.certificado[0])

  const asset = Asset.fromModule(require('../../assets/certificado/mockup-frente.jpg'));
  const asset2 = Asset.fromModule(require('../../assets/certificado/assinatura.png'));
  const asset3 = Asset.fromModule(require('../../assets/certificado/mockup-verso.jpg'));
  const asset4 = Asset.fromModule(require('../../assets/certificado/carimbo.jpg'));



  const image = await manipulateAsync(
    asset.localUri ?? asset.uri,
    [],
    { base64: true }
  );
  const image2 = await manipulateAsync(
    asset2.localUri ?? asset2.uri,
    [],
    { base64: true }
  );
  const imageVerso = await manipulateAsync(
    asset3.localUri ?? asset3.uri,
    [],
    { base64: true }
  );
  const imageCarimbo= await manipulateAsync(
    asset4.localUri ?? asset4.uri,
    [],
    { base64: true }
  );
  const dadosAluno = response.data.certificado[0];
  if (dadosAluno.nome_aluno.length > 40) {
    var tamanhoFonte = "25px"
  } else if (response.data.certificado[0].nome_aluno.length > 30) {
    var tamanhoFonte = "35px";
  } else {
    var tamanhoFonte = "45px";
  }

  if (dadosAluno.mostracpfrg === "0") {
    var identificacaoAluno = "<br>";
  }
  if (dadosAluno.mostracpfrg === "1") {
    var identificacaoAluno = "Portador do CPF <b> `${dadosAluno.cpf}`</b>";
  } if (dadosAluno.mostracpfrg === "2") {
     var identificacaoAluno = "Identificado(a) com o RG: <b>/${dadosAluno.cpf}</b> e CPF <b>${dadosAluno.rg}</b>";
  }


 if(dadosAluno.mostrainicio==="0"){
    var variavelPeriodo = `concluído em <b> ${dadosAluno.data_fim} </b>`;
  }else{
    var variavelPeriodo = `concluído no período de <b>${dadosAluno.data_inicio}</b> até <b> ${dadosAluno.data_fim} </b>`;
 }
   var descricaoCertificado = `o certificado referente a conclusão do curso de <b>de ${dadosAluno.nome_curso} </b><br> ${variavelPeriodo} com a carga horária de <b>280 horas</b><br>e nota final de <b>100 pontos.</b>`;
 /*


  Abaixo da identificação do aluno vai um texto descrevendo o nome do curso, a data de início e fim, a carga horária do curso e a nota da prova

  if(Aluno optar por ter apenas a data de conclusão descrita no certificado){
    var variavelPeriodo = "concluído em <b>/variavelDataFinal/</b>";
  }else{
    var variavelPeriodo = "concluído no período de <b>/variavelDataInicio/</b> até <b>/variavelDataFinal/</b>";
  }

  var descricaoCertificado = "
    o certificado referente a conclusão do curso de <b>de /variavelNomeDoCurso/</b><br>

    /variavelPeriodo/ com a carga horária de <b>/variavelCargaHoraria/ horas</b><br>

    e nota final de <b>/variavelNota/ pontos.</b>
  ";
--> */
  return `
   <!DOCTYPE html>
<html>
	<head>
	  <link rel='preconnect' href='https://fonts.gstatic.com'>
	  <link href='https://fonts.googleapis.com/css2?family=Jost' rel='stylesheet'>
    <meta charset='utf-8'>

		<style type='text/css'>
		  @media print {
        @page {
          size: A4 landscape;
          margin: 0.0;
        }
      }

		  .frente{
		  	width: 1122px;
		  	height: 540px;
		  	margin-top: -45px;
		  	margin-left: -45px;
		  }

		  .assinatura{
		  	position: absolute;
		  	width: 180px;
		  	height: 140px;
		  	transform: rotate(183deg);
		  	margin-top: 600px;
		  	margin-left: 100px;
        background:transparent;
		  }

		  .verso{
		  	width: 1122px;
		  	height: 540px;
		  	margin-top:700px;
		  	margin-left: -45px;
		  }

		  .normal{
		  	font-family: sans-serif;
		  	font-size: 18px;
    		display: block;
    		margin-left: 820px;
    		margin-top: 280px;
    		z-index:1;
		  }

		  .normal b{
		  	font-size:30px;
		  }

		  .nome_aluno{
		  	font-family: Jost;
		  	padding-top: 345px;
		  	padding-left: 80px;
		  	font-size: {tamanhoFonte};
		  	font-weight: 700;
		  	z-index:1;
				position: absolute;

		  }

		  .identificacao_aluno{
		  	font-family: Jost;
				position: absolute;
		  	left: 30px;
		  	top:628px;
		  	font-size:18px;
		  	z-index:1;
		  }

		  .descricao{
		  	font-family: Jost;
				position: absolute;
		  	left: 30px;
		  	top: 650px;
		  	font-size: 18px;
    		z-index:1;
		  }

		  .conteudo_programatico{
		  	font-family: sans-serif;
		  	font-size: 18px;
		  	padding-left:70px;
		  	padding-top:150px;
		  	position: fixed;
    		z-index:1;
		  }

		  .conteudo_programatico li{
		  	padding-bottom:7px;
		  	margin-right: 310px;
		  }

		  .nota{
		  	font-family: sans-serif;
		  	font-size: 18px;
		  	padding-left:195px;
		  	padding-top:654px;
		  	position: fixed;
		  	z-index:1;
		  }

		  .registro{
		  	font-family: sans-serif;
		  	font-size: 18px;
		  	margin-left:766px;
		  	margin-top:641px;
		  	padding-top: 5px;
		  	width:170px;
		  	height:27px;
		  	position: fixed;
		  	text-align: center;
		  	z-index:1;
		  }

		  .carimbo{
		  	margin-left:500px;
		  	margin-top:540px;
		  	position: fixed;
		  	width: 240px;
		  	transform: rotate(-25deg);
		  	z-index:1;
		  }
		</style>
	</head>
	<body>
    <!-- ############################## FRENTE DO CERTIFICADO ############################## -->
		<div class = 'frente'>
			<img src='data:image/jpeg;base64,${image.base64}' style='position: absolute; width: 100%;'> <!-- Imagem da frente do certificado, dentro do drive, na pasta de imagens -->

			<img class='assinatura' src='https://portalidea.com.br/aluno/imagens/assinatura2.png'> <!-- Imagem da assinatura da diretora do Portal IDEA, dentro do drive, na pasta de imagens -->

			<div class='normal'>
			</div>

			<div class='nome_aluno'>
				${dadosAluno.nome_aluno}
			</div>

			<div class='identificacao_aluno'>
		${identificacaoAluno}
			</div>

			<div class='descricao'>
      ${descricaoCertificado}
			</b>
			</div>
		</div>
    <!-- ############################## VERSO DO CERTIFICADO ############################## -->
		<div class = 'verso'>

			<img src='data:image/jpeg;base64,${imageVerso.base64}' style='position: absolute; width: 100%;'> <!-- Imagem do verso do certificado, dentro do drive, na pasta de imagens -->

			<div class='conteudo_programatico'>
        <li>
          ${dadosAluno.conteudo1}
        </li>
        <li>
          ${dadosAluno.conteudo2}
        </li><li>
          ${dadosAluno.conteudo3}
        </li><li>
          ${dadosAluno.conteudo4}
        </li><li>
          ${dadosAluno.conteudo5}
        </li><li>
          ${dadosAluno.conteudo6}
        </li><li>
          ${dadosAluno.conteudo7}
        </li><li>
          ${dadosAluno.conteudo8}
        </li><li>
          ${dadosAluno.conteudo9}
        </li><li>
          ${dadosAluno.conteudo10}
        </li>

			</div>

			<div class='nota'>
			100
        pontos
			</div>

      <img class='carimbo' src='data:image/jpeg;base64,${imageCarimbo.base64}'> <!-- Imagem do carimbo, dentro do drive, na pasta de imagens -->

			<div class='registro'>1312321</div>
		</div>



	</body>
</html>
  `;
}



export default function Pdf() {
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
     const html = await generateHTML();
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only,
    });
  }

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const html = await generateHTML();
    const { uri } = await Print.printToFileAsync({
      html
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }

  return (
    <View style={styles.container}>
      <Button title='Print' onPress={print}  />
      <View style={styles.spacer} />
      <Button title='Print to PDF file' onPress={printToFile}/>
      {Platform.OS === 'ios' &&
        <>
          <View style={styles.spacer} />
          <Button title='Select printer' onPress={selectPrinter}/>
          <View style={styles.spacer} />
          {selectedPrinter ? <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
        </>
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    flexDirection: 'column',
    padding: 8,
  },
  spacer: {
    height: 8
  },
  printer: {
    textAlign: 'center',
  }
});
