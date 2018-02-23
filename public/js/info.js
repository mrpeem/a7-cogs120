'use strict';

$(document).ready(function() {
  $('#temp-f').addClass('temp-active');
  $('#temp-f2').addClass('temp-active');
  $('#temp-f3').addClass('temp-active');

  $('#temp-c').click(function() {
    $('#temp-f').removeClass('temp-active');
    $('#temp-c').addClass('temp-active');
    $('#temp-data').text('16');
  });

  $('#temp-f').click(function() {
    $('#temp-c').removeClass('temp-active');
    $('#temp-f').addClass('temp-active');
    $('#temp-data').text('61');
  });

  $('#temp-c2').click(function() {
    $('#temp-f2').removeClass('temp-active');
    $('#temp-c2').addClass('temp-active');
    $('#temp-data2').text('17');
  });

  $('#temp-f2').click(function() {
    $('#temp-c2').removeClass('temp-active');
    $('#temp-f2').addClass('temp-active');
    $('#temp-data2').text('63');
  });


  $('#temp-c3').click(function() {
    $('#temp-f3').removeClass('temp-active');
    $('#temp-c3').addClass('temp-active');
    $('#temp-data3').text('11');
  });

  $('#temp-f3').click(function() {
    $('#temp-c3').removeClass('temp-active');
    $('#temp-f3').addClass('temp-active');
    $('#temp-data3').text('53');
  });




})
