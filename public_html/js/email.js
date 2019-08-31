function enviar() {

    dadosForm = $('#formContato').serialize();
    $('#enviando').show();
    
    $.ajax({
        method: 'post',
        url: 'https://lab.dextak.com.br/ws-email/index.php',
        data: dadosForm,
        dataType: 'json',
        success: function (data) {
            //Mensagem de sucesso
            $('#enviando').hide();
            alert('Mensagem enviada com sucesso !');
        },
        error: function (argument) {
            //Mensagem de erro
            alert('Falha ao enviar mensagem !');
        }
    });

    return false;
}
