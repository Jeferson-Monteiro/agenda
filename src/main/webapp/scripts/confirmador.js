/**
* Confirma��o de exclus�o de um contato
* @autor Jeferson Monteiro
* @param idcon
*/

function confirmar(idcon){
	let resposta = confirm("Confirma a exclus�o deste contato ?")
	if (resposta === true){
		//alert(idcon)
		window.location.href = "delete?idcon=" + idcon
	}
}