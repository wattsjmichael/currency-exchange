import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConversionService from "./conversion-service";

async function getElements(response, usdValue, place) {
  if (response.conversion_rates) {
    if (place === "USD") {
      $("#showResult").text(`${(response.conversion_rates.USD * usdValue)} Dollars`).show();
    } else if (place === "AED") {
      $("#showResult").text(`${(response.conversion_rates.USD * usdValue)} Dirham`).show();
    } else if (place === "ARS") {
      $("#showResult").text(`${(response.conversion_rates.USD * usdValue)} Argentine Pesos`).show();
    } else if (place === "AUD") {
      $("#showResult").text(`${(response.conversion_rates.USD * usdValue)} Australian Dollar`).show();
    } else if (place === "BGN") {
      $("#showResult").text(`${(response.conversion_rates.USD * usdValue)} Bulgarian Lev`).show();
    } else if (place === "BRL") {
      $("#showResult").text(`${(response.conversion_rates.USD * usdValue)} Brazillian Real`).show();
    } else if (place === null) {
      $("#showError").text("Please Select a Country").show();
    } else {
      alert(`If you made it here, call tech support error ${response.status}`);
    }
  } else {
    $("#showError").text(`There was a error ${response.status}`);
  }
}


async function makeApiCall(usdValue, place) {
  const response = await ConversionService.getConversion(place);
  getElements(response, usdValue, place);
}

$(document).ready(function () {
  $("#submit").click(function () {
    let usdValue = $("#usdValue").val();
    let place = $("#country").val();
    makeApiCall(usdValue, place);
    $("#country").val("");
    $("#reload").click(function () {
      location.reload();
    });
  });
});