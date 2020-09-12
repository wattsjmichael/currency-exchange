import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$(document).ready(function(){
  $("#submit").click(function(){
    let usdValue = $("#usdValue").val();
    let place = $("#country").val();
    $("#country").val("");
  

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${place}`;

    request.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    
    request.open("GET", url, true);
    request.send();

    function getElements(response){
      if (place === "USD"){
        $("#showUSD").text(`${(response.conversion_rates.USD * usdValue)} Dollars`).show();
      } else if (place === "AED") {
        $("#showAED").text(`${(response.conversion_rates.USD * usdValue)} Dirham`).show();
      } else if (place === "ARS") {
        $("#showARS").text(`${(response.conversion_rates.USD * usdValue)} Argentine Pesos`).show();
      } else if (place === "AUD") {
        $("#showAUD").text(`${(response.conversion_rates.USD * usdValue)} Australian Dollar`).show();
      } else if (place === "BGN") {
        $("#showBGN").text(`${(response.conversion_rates.USD * usdValue)} Bulgarian Lev`).show();
      } else if (place === "BRL") {
        $("#showBRL").text(`${(response.conversion_rates.USD * usdValue)} Brazillian Real`).show();
      } else if (place === null) {
        $("#showError").text("Please Select a Country").show();
      } else {
        alert(`If you made it here, call tech support error ${response.status}`)
      }
    }
  });
});
