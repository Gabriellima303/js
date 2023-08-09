function Enviar(){

    var nome = document.getElementById("nomeid");

        if(nome.value != ""){
        alert('Obrigado sr(a)' + nome.value +
        'seu formulário foi enviado e descartado')
    }
}

function limpa_formulário_cep(){
    //Essa função limpou o formulario e deixe ele sem nada
    //escrito substituindo por valor vazio("")
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        //caso não dê erro, os campos serão preenchidos com informações
        //referentes ao cep informado
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.cidade);
        document.getElementById('uf').value=(conteudo.uf);

    }
    else {
        limpa_formulário_cep();
        alert("Cep não encontrado")
    }
}

function pesquisacep(valor){
    //Nova variavel "cep" somente com dígitos
    var cep = valor.replace(/\D/g, '');

    //Veridica se o campo cep possui valor informado
    //Para o formato CEP mundial
    if(cep != ""){
        var validacep = /^[0-9]{8}&/;   
    
        if(validacep.test(cep)){
            document.getElementById('rua').value='...';
            document.getElementById('bairro').value='...';
            document.getElementById('cidade').value='...';
            document.getElementById('uf').value='...';

            //Cria um elemento Javascript, ele vai ser usado para acessar o servidor dos correios(ViaCEP)
            var script = document.createElement('script');
            
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
        }
    }
}
