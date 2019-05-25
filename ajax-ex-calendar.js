$(document).ready(function(){

var mese = ('0'+1);
var data;
var moment_data;
var giorni;

stampamese();

// var data = "2018-" + mese + "-01";
//
// var moment_data = moment(data);
// var giorni = moment_data.daysInMonth();
// // console.log(giorni);
//
//
// $('.mesecorrente').text(moment_data.format('MMMM') + ' ' + moment_data.format('YYYY'));
//
// for (var i = 0; i < giorni; i++) {
//
//   $('.mese ul').append('<li>' + parseInt(i+1) + ' ' + moment_data.format('MMMM') + '</li>')
//
// }

// $.ajax({
//   'url': 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0',
//   'method': 'GET',
//   'data': {
//     'year': '2018',
//     'month': '0'
//   },
//   'success': function(data){
//
//     for (var k = 0; k < data.response.length; k++){
//       for (j = 0; j < giorni; j++){
//
//         if($('li').eq(j).attr('data-giorno') == data.response[k].date){
//           $('.mese ul li').eq(j).append(' ' + data.response[k].name);
//         }
//         console.log($('li').eq(j).attr('data-giorno'));
//         console.log(data.response[k].date);
//       }
//       // if(moment_data.format('YYYY-MM-DD') == data.response[k].date){
//       //   $('.mese ul').children().append(data.response[k].name);
//       //
//       // }
//     }
//
//
//   },
//   'error': function() {
//     alert('errore');
//   }
// });


$('.successivo').click(function(){

  mese = parseInt(mese)+1;

  if (mese < 10) {
    mese = '0' + mese;
  };

  if (parseInt(mese) <= 12) {

    stampamese();

  };



})

$('.precedente').click(function(){

  mese = parseInt(mese)-1;

  if (mese < 10) {
    mese = '0' + mese;
  };

  if (parseInt(mese) >= 1) {

    stampamese();

  };



})


function stampamese() {
  $('.mese ul').html('');

  data = "2018-" + mese + "-01";

  moment_data = moment(data);
  giorni = moment_data.daysInMonth();


  $('.mesecorrente').text(moment_data.format('MMMM') + ' ' + moment_data.format('YYYY'))

  for (var i = 0; i < giorni; i++) {
    var giornocorrente = parseInt(i+1);
    if (giornocorrente < 10) {
      giornocorrente = '0' + giornocorrente;
    }
  $('.mese ul').append('<li data-giorno="2018-' + mese + '-' + giornocorrente +'">' + parseInt(i+1) + ' ' + moment_data.format('MMMM') + '</li>')
  }

  $.ajax({
    'url': 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0',
    'method': 'GET',
    'data': {
      'year': '2018',
      'month': '0'
    },
    'success': function(data){

      for (var k = 0; k < data.response.length; k++){
        for (j = 0; j < giorni; j++){

          if($('li').eq(j).attr('data-giorno') == data.response[k].date){
            $('.mese ul li').eq(j).append(' ' + data.response[k].name);
          }
          console.log($('li').eq(j).attr('data-giorno'));
          console.log(data.response[k].date);
        }
        // if(moment_data.format('YYYY-MM-DD') == data.response[k].date){
        //   $('.mese ul').children().append(data.response[k].name);
        //
        // }
      }


    },
    'error': function() {
      alert('errore');
    }
  });

}



});
