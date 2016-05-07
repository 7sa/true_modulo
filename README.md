# true_modulo
Attempt to write a JS modulo operator


A few weeks ago I saw the following on MDN's [re-introduction to JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Operators):
> JavaScript's numeric operators are +, -, *, / and % — which is the remainder operator (which is not the same as modulo.) Values are assigned using =, and there are also compound assignment statements such as += and -=. These extend out to x = x operator y.

The [linked page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_%28%29) *helpfully* adds:
> The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend, not the divisor. It uses a built-in modulo function to produce the result, which is the integer remainder of dividing var1 by var2 — for example — var1 modulo var2. There is a proposal to get an actual modulo operator in a future version of ECMAScript, the difference being that the modulo operator result would take the sign of the divisor, not the dividend.

I don't know what this means and when I asked about modulos' not being real at Fullstack's admissions test prep, it appeared to be news to the teaching fellow as well.

The following week, a Fullstack practice challenge I was working on pointed to [this page](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic) at Khan Academy as reference. The [next page](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/e/modulo-operator) (at least for me) issues the following problem: -29 mod 4.

Now for me, not knowing much about modulo beyond what I've been taught, that it finds the "remainder", I would guess that the answer is -1, and indeed this is what I get with JS:
-29 % 4  // returns -1

But according to Khan Academy, -29 mod 4 is 3. Now I can sort of see how to get to 3; 4 + -1 is 3. But I didn't know why (still don't)...

Today I decided to go back to the beginning of the JS map at freeCodeCamp (I'd hopped around before FS test prep), and at [Finding a Remainder] I read:
> The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.

*Aha!* I thought. *This must be what Brendan Eich and Douglas Crockford were talking about on MDN!* And so with support from Google Calculator and my limited JS knowledge I set about to try creating a "proper" modulo...
