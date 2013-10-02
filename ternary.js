function pluralize(word,number) {
	var x = (number === 1) ? word : word + "s";
	return x
}

console.log(pluralize("test",1))
console.log(pluralize("list",0))