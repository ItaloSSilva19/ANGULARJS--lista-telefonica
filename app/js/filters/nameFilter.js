angular.module("listaTelefonica").filter("name", function () {
	return function (input) {
		var listaNomes = input.split(' ');
		var listaNomesFormatada = listaNomes.map(function (nome) {
			if (/\bd[aeiou]\b/i.test(nome)) return nome.toLowerCase();
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		return listaNomesFormatada.join(" ");
	};
});