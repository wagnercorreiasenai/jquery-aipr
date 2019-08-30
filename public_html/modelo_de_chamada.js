function enviar() {

    dadosForm = $('#formularioContato').serialize();

    $.ajax({
        method: 'post',
        url: 'https://lab.dextak.com.br/ws-email/index.php',
        data: dadosForm,
        dataType: 'json',
        success: function (data) {
            //Mensagem de sucesso
        },
        error: function (argument) {
            //Mensagem de erro
        }
    });

    return false;
}
