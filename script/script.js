function zerarResultados() {
    // Limpar os resultados
    document.getElementById("resultado").textContent = "";
    document.getElementById("resultado2").textContent = "";
    document.getElementById("resultado3").textContent = "";
    document.getElementById("resultado4").textContent = "";
    document.getElementById("porcentagem").textContent = "";
    document.getElementById("centena1").textContent = "";
    document.getElementById("centena2").textContent = "";
    document.getElementById("centena3").textContent = "";
    document.getElementById("centena4").textContent = "";
    document.getElementById("milhar1").textContent = "";
    document.getElementById("milhar2").textContent = "";
    document.getElementById("milhar3").textContent = "";
    document.getElementById("milhar4").textContent = "";

    // Redefinir o valor do campo de entrada
    document.getElementById("dia").value = "";

    // Ocultar o botão "Zerar"
    document.getElementById("zerarButton").style.display = "none";
}

function mostrarResultado() {
    var dia = parseInt(document.getElementById("dia").value);

    if (dia >= 1 && dia <= 31) {

        var dia_dezena = Math.floor(dia / 10);
        var dia_unidade = dia % 10;
        var soma_digitos = dia_dezena + dia_unidade;
        var unidade_soma = soma_digitos % 10;
        var linha1 = dia_dezena.toString() + dia_unidade.toString() + unidade_soma.toString();

        var numero_alem = 3;

        var linha3_unidade3_soma = unidade_soma + numero_alem;
        var linha3_unidade3 = linha3_unidade3_soma % 10;
        var linha3_unidade2_soma = linha3_unidade3 + numero_alem;
        var linha3_unidade2 = linha3_unidade2_soma % 10;
        var linha3_unidade1_soma = linha3_unidade2 + numero_alem;
        var linha3_unidade1 = linha3_unidade1_soma % 10;
        var linha3 = linha3_unidade1.toString() + linha3_unidade2.toString() + linha3_unidade3.toString();


        var linha2_unidade1_soma = linha3_unidade1 + numero_alem;
        var linha2_unidade1 = linha2_unidade1_soma % 10;
        var linha2_unidade2_soma = linha2_unidade1 + numero_alem;
        var linha2_unidade2 = linha2_unidade2_soma % 10;
        var linha2_unidade3_soma = linha2_unidade2 + numero_alem;
        var linha2_unidade3 = linha2_unidade3_soma % 10;
        var linha2 = linha2_unidade1.toString() + linha2_unidade2.toString() + linha2_unidade3.toString();


        var dezena1 = linha2[1].toString() + linha1[0].toString();
        var dezena2 = linha2[1].toString() + linha1[2].toString();
        var dezena3 = linha2[1].toString() + linha3[2].toString();
        var dezena4 = linha2[1].toString() + linha3[0].toString();

        var dezena1Int = parseInt(dezena1);
        var dezena2Int = parseInt(dezena2);
        var dezena3Int = parseInt(dezena3);
        var dezena4Int = parseInt(dezena4);

        document.getElementById("resultado").textContent = dezena1;
        document.getElementById("resultado2").textContent = dezena2;
        document.getElementById("resultado3").textContent = dezena3;
        document.getElementById("resultado4").textContent = dezena4;

        var arr_bichos = [];

        arr_bichos[1] = "Avestruz";
        arr_bichos[2] = "Aguia";
        arr_bichos[3] = "Burro";
        arr_bichos[4] = "Borboleta";
        arr_bichos[5] = "Cachorro";
        arr_bichos[6] = "Cabra";
        arr_bichos[7] = "Carneiro";
        arr_bichos[8] = "Camelo";
        arr_bichos[9] = "Cobra";
        arr_bichos[10] = "Coelho";
        arr_bichos[11] = "Cavalo";
        arr_bichos[12] = "Elefante";
        arr_bichos[13] = "Galo";
        arr_bichos[14] = "Gato";
        arr_bichos[15] = "Jacaré";
        arr_bichos[16] = "Leao";
        arr_bichos[17] = "Macaco";
        arr_bichos[18] = "Porco";
        arr_bichos[19] = "Pavao";
        arr_bichos[20] = "Peru";
        arr_bichos[21] = "Touro";
        arr_bichos[22] = "Tigre";
        arr_bichos[23] = "Urso";
        arr_bichos[24] = "Veado";
        arr_bichos[25] = "Vaca";


        var i = 0;
        var arr_tabela_bicho = ["Vaca"];

        for (var indice in arr_bichos) {
            var valor = arr_bichos[indice];
            for (var c = 1; c <= 4; c++) {
                i++;
                arr_tabela_bicho[i] = valor;
            }
        }

        var arrResultado = [];

        arrResultado.push(arr_tabela_bicho[dezena1Int]);
        arrResultado.push(arr_tabela_bicho[dezena2Int]);
        arrResultado.push(arr_tabela_bicho[dezena3Int]);
        arrResultado.push(arr_tabela_bicho[dezena4Int]);


        var arrContagem = {};

        // Percorre o array arrResultado e conta a ocorrência de cada valor
        arrResultado.forEach(function (valor) {
            if (arrContagem[valor]) {
                arrContagem[valor]++;
            } else {
                arrContagem[valor] = 1;
            }
        });


        // Obtém a div onde você deseja exibir o resultado
        var divResultado = document.getElementById("porcentagem");

        // Cria uma lista não ordenada (ul) para mostrar os resultados
        var ul = document.createElement("th");


        // Calcula a porcentagem para cada valor e exibe no console
        for (var valor in arrContagem) {
            if (arrContagem.hasOwnProperty(valor)) {
                var ocorrencias = arrContagem[valor];
                var porcentagem = (ocorrencias / arrResultado.length * 100).toFixed(2);

                // Cria um item de lista (li) para cada resultado
                var li = document.createElement("li");
                //li.textContent = `Valor: ${valor}, Ocorrências: ${ocorrencias}, Porcentagem: ${porcentagem}%`;
                li.textContent = valor.toString() + " " + porcentagem.toString() + "%";

                // Adiciona o item de lista à lista não ordenada (ul)
                ul.appendChild(li);
            }
        }

        // Adiciona a lista à div de resultado
        divResultado.appendChild(ul);

        var centena1 = linha1[0] + linha2[1] + linha3[2];
        var centena2 = linha1[2] + linha2[1] + linha3[0];
        var centena3 = linha3[2] + linha2[1] + linha1[0];
        var centena4 = linha3[0] + linha2[1] + linha1[2];

        var milhar1 = linha1[0] + linha2[1] + dezena1Int;
        var milhar2 = linha1[2] + linha2[0] + dezena2Int;
        var milhar3 = linha3[1] + linha2[2] + dezena3Int;
        var milhar4 = linha3[1] + linha2[0] + dezena4Int;

        document.getElementById("centena1").textContent = centena1;
        document.getElementById("centena2").textContent = centena2;
        document.getElementById("centena3").textContent = centena3;
        document.getElementById("centena4").textContent = centena4;

        document.getElementById("milhar1").textContent = milhar1;
        document.getElementById("milhar2").textContent = milhar2;
        document.getElementById("milhar3").textContent = milhar3;
        document.getElementById("milhar4").textContent = milhar4;

        document.getElementById("zerarButton").style.display = "block";

    }

    else {
        document.getElementById("resultado").textContent = "Numeros Invalida, tente novamente";
    }
}




