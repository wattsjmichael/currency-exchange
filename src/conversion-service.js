export default class ConversionService{
  static getConversion(usdValue) {
    return new promise = new Promise(function(resolve, reject){
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
    
  }
}