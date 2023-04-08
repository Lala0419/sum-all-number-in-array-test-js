function sumItems(array) {
	// Sum all the numbers in the arra
	let result = 0;
	for (item of array) {
		if (Array.isArray(item)) {
			result += sumItems(item);
		} else {
			result += item;
		}
	}
	console.log(result);
	return result;
}
sumItems([[1, 2, [[3], 4]], 5, []]);

module.exports = sumItems;
