const readline = require('node:readline');
let inputUser;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Insert a target value of the given array => [${arr}] : `, (num) => {
    inputUser = parseInt(num)
    rl.close()
    console.log("the index of the target value is: ", binary_search(arr, inputUser))
})

function binary_search(arr, target) {
	let start = 0;
	let end = arr.length - 1;
	while(start <= end){
		let middle = Math.floor((start + end) / 2);
		if(target == arr[middle]) return middle;
		if(target > middle + 1){ start = middle + 1 }
		if(target < middle + 1){end = middle - 1}
	}
	return -1
}
