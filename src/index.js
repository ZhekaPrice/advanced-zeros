module.exports = function getZerosCount(number, base) {
  // your implementation

  var result = number;
  var tempCount, tempNumber, tempbase = base, tempCount1;
  for (var i = 2; i <= base ; i++)
  {
    tempNumber = number;
    tempCount1 = 0;
    if (tempbase % i == 0)
    {
      tempCount = 0;
      while(tempbase % i == 0)
      {
        tempbase = Math.floor(tempbase/i);
        tempCount++;
      };
      while(tempNumber/i > 0)
      {
        tempCount1 += Math.floor(tempNumber/i);
        tempNumber = Math.floor(tempNumber/i);
      };
      result = Math.floor(Math.min(result,tempCount1/tempCount));
    };
  };
  return result;
}