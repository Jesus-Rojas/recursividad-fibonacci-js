const memo = [];

function memoFibonacci(n) {
    console.log('bucle')
	if (n === 0 || n === 1) {
		return 1;
	} else if (!memo[n]) {
		memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
	}  
	return memo[n];
}

console.log(memoFibonacci(5))
console.log(memoFibonacci(10))