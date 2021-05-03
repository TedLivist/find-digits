## solution

function findDigits(num) {
  let numToString = num.toString()
  let numIntoArray = numToString.split('')
  let divisorCount = 0
  for (let  i = 0; i < numIntoArray.length; i++) {
    numIntoArray[i] = parseInt(numIntoArray[i])
    if (num % numIntoArray[i] == 0) {
      divisorCount += 1
    }
  }
  return divisorCount
}
