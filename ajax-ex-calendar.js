$(document).ready(function(){

var mese = 1;
var data = "2018-" + mese + "-01";

var moment_data = moment(data);
var giorni = moment_data.daysInMonth();
// console.log(giorni);


$('.mesecorrente').text(moment_data.format('MMMM') + ' ' + moment_data.format('YYYY'))

for (var i = 0; i < giorni; i++) {

  $('.mese').append('<li>' + parseInt(i+1) + ' ' + moment_data.format('MMMM') + '</li>')
}

$('.successivo').click(function(){

  mese = mese+1;

  if (mese <= 12) {

    stampamese();

  };



})

$('.precedente').click(function(){

  mese = mese-1;

  if (mese >= 1) {

    stampamese();

  };



})


function stampamese() {
  $('.mese').html('');

  data = "2018-" + mese + "-01";

  var moment_data = moment(data);
  var giorni = moment_data.daysInMonth();
  console.log(giorni);


  $('.mesecorrente').text(moment_data.format('MMMM') + ' ' + moment_data.format('YYYY'))

  for (var i = 0; i < giorni; i++) {

  $('.mese').append('<li>' + parseInt(i+1) + ' ' + moment_data.format('MMMM') + '</li>')
  }
}



});
