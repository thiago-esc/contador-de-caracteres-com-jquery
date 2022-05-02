$('textarea').on('keyup paste', function() {
  setTimeout(function() {
    let valorCaracteres = $('textarea').val().length,
        valorPalavras = $('textarea').val().split(' ').length;
    $('.caracteres').text(valorCaracteres);
    $('.palavras').text(valorPalavras);
  }, 200);
    
});