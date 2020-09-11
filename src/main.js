import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#usdSubmit").click(function(){
    let usdValue = $("#usdValue").val();
    $("#usdValue").val("");



    
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
        $(".showAED").text((`USD Value: ${(response.conversion_rates.USD)*(usdValue)}`)).show();
      } else if (country === "AED"){
        $(".showAED").text((`AED Value: ${(response.conversion_rates.AED)*(usdValue)}`)).show();
      } else {
        alert ("its so broken!")
      }     
      
      
      
      
      // $("#country > option").foreach(function(){
      //   console.log(this.value);
      //   if (this.value === "AED") {
      //     $(".showAED").text((`AED Value: ${(response.conversion_rates.AED)*(usdValue)}`)).show();
      //   } else if (this.value === "USD") {
      //     $(".showUSD").text((`USD Value: ${(response.conversion_rates.USD)*(usdValue)}`)).show();
      //   }
        

      // });
    }

    //   $(".showUSD").html((`USD Dollars: ${(response.conversion_rates.USD)*(usdValue)}`));
    //   $(".showAED").text((`AED Value: ${(response.conversion_rates.AED)*(usdValue)}`));
    // }


  });
});