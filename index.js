function fibonacci(n) {
    console.log('bucle')
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

console.log(fibonacci(5))
console.log(fibonacci(10))