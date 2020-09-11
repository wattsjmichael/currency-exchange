import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#usdSubmit").click(function(){
    let usdValue = $("#usdValue").val();
    $("#usdValue").val("");
  $("#reload").click(function(){
    location.reload();
  });


let promise = new Promise(function(resolve, reject){
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  request.onload = function() {
    if (this.status === 200){
    resolve(request.response);
  } else {
    reject(request.response);
  }
}
request.open("Get", url, true);
request.send();
});

    promise.then(function(response) {
      let country = $("#country").val();
      const body = JSON.parse(response);
      console.log(`${error}`)
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
          $("#showError").text("Pick a different country!");
        }
      }, function(error) {
          $("#showError").text(`There was an error processing your request; ${error}`);

        });
      });
    });
