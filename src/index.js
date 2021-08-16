module.exports = function toReadable (number) {
  let result = []

  function numberToArray(num) {
  	let array = num.toString().split("");
  	return array.map(x => parseInt(x));
  }

  function oneNum(item) {
    const numbers ={
      1: 'one ',
      2: 'two ',
      3: 'three ',
      4: 'four ',
      5: 'five ',
      6: 'six ',
      7: 'seven ',
      8: 'eight ',
      9: 'nine '
    }
    result.push(numbers[item])
  }


  function twoNum(item) {
    const numbers ={
      10: 'ten ',
      11: 'eleven ',
      12: 'twelve ',
      13: 'thirteen ',
      14: 'fourteen ',
      15: 'fifteen ',
      16: 'sixteen ',
      17: 'seventeen ',
      18: 'eighteen ',
      19: 'nineteen ',
      20: 'twenty',
      2: 'twenty ',
      30: 'thirty',
      3: 'thirty ',
      40: 'forty',
      4: 'forty ',
      50: 'fifty',
      5: 'fifty ',
      60: 'sixty',
      6: 'sixty ',
      70: 'seventy',
      7: 'seventy ',
      80: 'eighty',
      8: 'eighty ',
      90: 'ninety',
      9: 'ninety '
    }

    if(item < 21 || item == 30 || item == 40 || item == 50 || item == 60 || item == 70 || item == 80 || item == 90){
      result.push(numbers[item])
    } else {
      let arr = numberToArray(item)
      result.push(numbers[arr[0]])
      oneNum(arr[1])
    }
  }

  


  function threeNum(item) {
    const numbers = {
      1: 'hundred '
    }

    let arr = numberToArray(item)

    oneNum(arr[0])

    result.push(numbers[1])

    if(arr[1] != 0) {
      twoNum(arr[1].toString() + arr[2].toString())
    } else {
      oneNum(arr[2])
    }
  }

  if(numberToArray(number).length == 1) {
    oneNum(number)
  } else if(numberToArray(number).length == 2) {
    twoNum(number)
  } else if(numberToArray(number).length == 3) {
    threeNum(number)
  }

  let res = result.join('').replace(/\s+$/, '')

  if(number == 0) res = 'zero'

  return res
}
