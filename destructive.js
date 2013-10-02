// destructive

var removeFalsey = function(array) {
  for (var i = 0; i < array.length; i++) {
  	if (!array[i]) array.splice(i, 1)
  }
  return array;
}

console.log(removeFalsey([false,1]))
console.log(removeFalsey([1,"two", 6, "8", null]))

// not destructive

var removeFalseyToo = function(array) {
	new_array = []
  for (var i = 0; i < array.length; i++) {
  	if (array[i]) new_array.push(array[i])
  }
  return new_array;
}

console.log(removeFalseyToo([false,1]))
console.log(removeFalseyToo([1,"two", 6, "8", null]))