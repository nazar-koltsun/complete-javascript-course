// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = (arr) => {
  // Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
  let resultStr = '';
  
  for (let i = 0; i < arr.length; i++) {
    resultStr += `... ${arr[i]} in ${i + 1} days `;
  }

  resultStr += '...'

  console.log(resultStr);
}

printForecast([12,5,-5,0,4]);