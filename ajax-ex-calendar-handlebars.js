$(document).ready(function(){


var template_html = $("#template_giorno").html();
var template_function = Handlebars.compile(template_html);

// salvo in due variabili la data minima e la data massima dell'anno
var min_date = '2018-01-01';
var max_date = '2018-12-01';

//imposto la data come stringa
var initial_date = '2018-01-01';
// la do "in pasto" a moment
var current_date = moment(initial_date);

//chiamo la funzione disegna_mese dandole current_date come parametro
disegna_mese(current_date);


//vado a intercetare il click sul mese successivo
$('#succ').click(function(){
  console.log(current_date.format('MMMM'));
  // mi assicuro che non si vada oltre dicembre 2018
  if (current_date.isSameOrAfter(max_date)) {
    alert('oltre la data!');
  } else {
    // faccio scorrere il calendario al mese successivo
    current_date.add(1, 'months');
    // richiamando la funzione che disegna il mese, che ora sarà il successivo
    disegna_mese(current_date);
  };

});

 // vado a intercettare il click sul mese precedente
 $('#prec').click(function(){
   console.log(current_date.format('MMMM'));
   // mi assicuro che non si vada prima di gennaio 2018
   if (current_date.isSameOrBefore(min_date)) {
     alert('oltre la data!');
   } else {
     // faccio scorrere il calendario al mese precedente
     current_date.subtract(1, 'months');
     // richiamando la funzione che disegna il mese, che ora sarà il successivo
     disegna_mese(current_date);
   };

 });


// qui imposto la funzione che dovro usare per stampare ogni mese

function disegna_mese(moment_date) {
  //svuoto il calendario
  $('#calendario').empty();

  // estrapolo il numero di giorni del mese
  var giorni = moment_date.daysInMonth();

  // imposto il formato di come vorrò vedere scritti il mese e l'anno
  var mese = moment_date.format('MMMM');
  var anno = moment_date.format('YYYY');

  //inserisco nel titolo del mese il mese corrente e l'anno
  $('#mesecorrente').text(mese + ' ' + anno);

  // genero il numero di giorni giusti del mese corrente
  for (var i = 1; i <= giorni; i++){
    var giorno = i + ' ' + mese;
    // imposto l'oggetto handlebars
    var variables = {
      'giorno_template': giorno
    }
    // inserisco il calendario con il numero di giorni corrispondenti al mese selezionato
    $('#calendario').append(template_function(variables));
  }
}


});
