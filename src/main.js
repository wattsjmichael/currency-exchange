import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from './conversion-service.js';

$(document).ready(function() {
  $("#usdSubmit").click(function(){
    let usdValue = $("#usdValue").val();
    let country = $("#country").val();
    $("#usdValue").val("");
  $("#reload").click(function(){
    location.reload();
  });

  let promise = ConversionService.getConversion(usdValue);
    promise.then(function(response) {
      const body = JSON.parse(response);
        if (country === "USD"){
          $("#showUSD").text((`USD Value: ${(body.conversion_rates.USD)*(usdValue)}`)).show();
          console.log(`${body.conversion_rates.USD}`)
        } else if (country === "AED"){
          $("#showAED").text((`AED Value: ${(body.conversion_rates.AED)*(usdValue)}`)).show();
        } else if (country === "ARS"){
          $("#showARS").text((`ARS Value: ${(body.conversion_rates.ARS)*(usdValue)}`)).show();
        } else if (country === "AUD"){
          $("#showAUD").text((`AUD Value: ${(body.conversion_rates.AUD)*(usdValue)}`)).show();
        } else if (country === "BGN"){
          $("#showBGN").text((`BGN Value: ${(body.conversion_rates.BGN)*(usdValue)}`)).show();
        } else if (country === "BRL"){
          $("#showBRL").text((`BRL Value: ${(body.conversion_rates.BRL)*(usdValue)}`)).show();
        } else {
          $("#showError").text("Pick a different country!").show;
        }
      }, function(error) {
          $("#showError").text(`There was an error processing your request; ${error}`).show();

        });
      });
    });
