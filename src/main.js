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
  })




    
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
        const response = JSON.parse (this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();





    function getElements(response) {
      let country = $("#country").val();
      console.log(country);
      if (country === "USD"){
        $("#showUSD").text((`USD Value: ${(response.conversion_rates.USD)*(usdValue)}`)).show();
      } else if (country === "AED"){
        $("#showAED").text((`AED Value: ${(response.conversion_rates.AED)*(usdValue)}`)).show();
      } else if (country === "ARS"){
        $("#showARS").text((`ARS Value: ${(response.conversion_rates.ARS)*(usdValue)}`)).show();
      } else if (country === "AUD"){
        $("#showAUD").text((`AUD Value: ${(response.conversion_rates.AUD)*(usdValue)}`)).show();
      } else if (country === "BGN"){
        $("#showBGN").text((`BGN Value: ${(response.conversion_rates.BGN)*(usdValue)}`)).show();
      } else if (country === "BRL"){
        $("#showBRL").text((`BRL Value: ${(response.conversion_rates.BRL)*(usdValue)}`)).show()
      } else {
        alert("Pick a different currency!")
      }
    }  

  });
});