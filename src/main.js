import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$(document).ready(function(){
  $("#submit").click(function(){
    let usdValue = $("#usdValue").val();
    let country = $("#country").val();
    $("#country").val("");
  

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${country}`;

    request.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }
    
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $("#showUSD").text(`${usdValue} ${response.result}`).show();
      console.log(country);
      
    }
  });
});
