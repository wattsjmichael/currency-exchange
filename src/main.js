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
    }
    
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      if (place === "USD"){
      $("#showUSD").text(`${(response.conversion_rates.USD * usdValue)} Dollars`).show();
      console.log(place);
      console.log(response.conversion_rates.USD)
      } else {
        alert("You did it wrong!")
      }
      
    }
  });
});
