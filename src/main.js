import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#usdSubmit").click(function(){
    let usdValue = $("#usdValue").val();
    $("#usdValue").val("");
    $()



    
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
      
      $(".showUSD").html((`USD Dollars: ${(response.conversion_rates.USD)*(usdValue)}`));
      $(".showAED").text((`AED Value: ${(response.conversion_rates.AED)*(usdValue)}`));
    }


  });
});