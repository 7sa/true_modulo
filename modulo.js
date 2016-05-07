var dividend = prompt ("DIVIDEND", "What you want to divide"),
	divisor = prompt ("DIVISOR", "What you are dividing by"),
	remainder;



// POSITIVE DIVIDEND

if (Math.sign(dividend) === 1) {
	if (Math.sign(divisor) === 1) {                            // POSITIVE DIVISOR
		remainder = dividend % divisor;
	} else {											       // NEGATIVE DIVISOR
		remainder = -(dividend % divisor);
	}


// NEGATIVE DIVIDEND

} else {
	if (Math.sign(divisor) === 1) {						       // POSITIVE DIVISOR
		remainder = divisor - (Math.abs(dividend) % divisor);  // Math.abs in case they change the way % works
	} else {}												   // idk what happens if both are negative; google calc says no results
															   // Letting JS figure it out seems to break it (-29 % -4 = -4)
}



alert(remainder);