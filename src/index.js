// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
      let obj = {
          H: null,
          Q: null,
          D: null,
          N: null,
          P: null
        };
      if (currency < 1) {
        return {};
      } else if (currency > 10000) {
        return {
          error: 'You are rich, my friend! We don\'t have so much coins for exchange'
        };
      } else {
        let count = currency;
        while (count > 0) {
          obj.H = Math.floor(count / 50);
          count = count % 50;

          obj.Q = Math.floor(count / 25);
          count = count % 25;

          obj.D = Math.floor(count / 10);
          count = count % 10;

          obj.N = Math.floor(count / 5);
          count = count % 5;

          obj.P = Math.floor(count / 1);
          count = count % 1;

          const sort = function () {
            let objKeys = Object.keys(obj);
            objKeys.forEach(function (key) {
              let value = (obj[key]);
              if (value < 1) {
                delete obj[key];
                return obj;
              }
            })
          }
          sort();
        }
      }
      return obj;
}
