export default class ConversionService {
  getConversion(place){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-ap.com/v6/${process.env.API_KEY}/latest/${place}`;
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
  }
}
