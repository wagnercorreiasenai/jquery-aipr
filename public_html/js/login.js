function logar() {
    usuario = $('#usuario').val();
    senha = $('#senha').val();
    
    if (usuario == 'wagner' & senha == '123456') {
        alert('Usuário logado com sucesso!');
        mensagem = 'Seja bem vindo !';
        $('#saudacao').html(mensagem);
        $('#saudacao').fadeIn(5000);
    } else {
        alert('Usuário ou senha incorreta!');
    }
}

function mostrarBlocos() {
    $('#bloco1').slideDown(2000);
}