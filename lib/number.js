'use strict';

// MODULES //

var ln = Math.log;


// GENERATE LOGISTIC RANDOM NUMBERS //

/**
* FUNCTION random( mu, s[, rand] )
*	Generates a random draw from a logistic distribution with parameters `mu` and `s`.
*
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( mu, s, rand ) {
	var u;
	u = rand ? rand() : Math.random();
	return mu + s * ln( u / ( 1 - u ) );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
