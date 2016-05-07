var dividend = prompt ("DIVIDEND", "What you want to divide"),
	divisor = prompt ("DIVISOR", "What you are dividing by"),
	remainder;

// Takes care of modulo of negative numbers

if (dividend > -1 && divisor > 0) {     // modulo of positive number
	remainder = dividend % divisor;
} else if (dividend < 0 && divisor > 0) { // modulo of negative number
	remainder = divisor - (dividend % divisor);
} else if (dividend > -1 && divisor < 0) { // modulo of pos divided by negative number
	remaider = -dividend % divisor;
} else {} // IDK what happens if both are negative; figured out 3rd case w Google calculator ;;



alert(remainder);