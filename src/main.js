import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$(document).ready(function(){
  $("#submit").click(function(){
    let usdValue = $("#usdValue").val();
    let place = $("#country").val();
    $("#country").val("");
    $("#reload").click(function(){
      location.reload();
  });



    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${place}`;

      request.onload = function(){
        if (this.status === 200){
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
    
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(response){
      const body = JSON.parse(response);
      if (place === "USD"){
        $("#showResult").text(`${(body.conversion_rates.USD * usdValue)} Dollars`).show();
      } else if (place === "AED") {
        $("#showResult").text(`${(body.conversion_rates.USD * usdValue)} Dirham`).show();
      } else if (place === "ARS") {
        $("#showResult").text(`${(body.conversion_rates.USD * usdValue)} Argentine Pesos`).show();
      } else if (place === "AUD") {
        $("#showResult").text(`${(body.conversion_rates.USD * usdValue)} Australian Dollar`).show();
      } else if (place === "BGN") {
        $("#showResult").text(`${(body.conversion_rates.USD * usdValue)} Bulgarian Lev`).show();
      } else if (place === "BRL") {
        $("#showResult").text(`${(body.conversion_rates.USD * usdValue)} Brazillian Real`).show();
      } else if (place === null) {
        $("#showError").text("Please Select a Country").show();
      } else {
        alert(`If you made it here, call tech support error ${body.status}`);
      }
    }, function(status) {
      $("#showError").text(`There was a error ${status}`);
    });
  });
});