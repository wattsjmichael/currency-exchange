import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';


let usdValue = $("#usdValue").val();
let country = $("#country").val();
function getElements(response) {
  if (response) {
    if (country === "USD") {
    $("#showUSD").text((`USD Value: ${(response.conversion_rates.USD)*(usdValue)}`)).show();
     
      console.log(usdValue);
  } else {
    $("#showError").text(`There was an error ${response.status}`);
  }
}
}
$(document).ready(function(){
  ("#usdSubmit").click(function(){
    ConversionService.getConversion()
    .then(function(response) {
      getElements(response);
    });
    });
  });




















// $(document).ready(function() {
//   $("#usdSubmit").click(function(){
//     let usdValue = $("#usdValue").val();
//     let country = $("#country").val();
//     $("#usdValue").val("");
//   $("#reload").click(function(){
//     location.reload();
//     ConversionService.getConversion()
//     .then(function(response){
//       getElements(response);
//   });


// function getConversion(response){
//   if (response) {
//         if (country === "USD"){
//           $("#showUSD").text((`USD Value: ${(response.main.conversion_rates.USD)*(usdValue)}`)).show();
//           console.log(`${response.main.conversion_rates.USD}`)
//         } else if (country === "AED"){
//           $("#showAED").text((`AED Value: ${(response.main.conversion_rates.AED)*(usdValue)}`)).show();
//         } else if (country === "ARS"){
//           $("#showARS").text((`ARS Value: ${(response.main.conversion_rates.ARS)*(usdValue)}`)).show();
//         } else if (country === "AUD"){
//           $("#showAUD").text((`AUD Value: ${(response.main.conversion_rates.AUD)*(usdValue)}`)).show();
//         } else if (country === "BGN"){
//           $("#showBGN").text((`BGN Value: ${(response.main.conversion_rates.BGN)*(usdValue)}`)).show();
//         } else if (country === "BRL"){
//           $("#showBRL").text((`BRL Value: ${(response.main.conversion_rates.BRL)*(usdValue)}`)).show();
//         } else {
//           $("#showError").text("Pick a different country!").show;
//         }
//       } else {
//           $("#showError").text(`There was an error processing your request; ${error}`).show()
