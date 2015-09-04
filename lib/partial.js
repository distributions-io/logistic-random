'use strict';

// FUNCTIONS //

var ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( mu, s[, rand] )
*	Partially applies `mu` and `s` and returns a function to generate random numbers from the logistic distribution.
*
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( mu, s, rand ) {
	var random;
	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw for a logistic distribution with parameters `mu` and `s`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var u = random();
		return mu + s * ln( u / ( 1 - u ) );
	}; // end FUNCTION draw()
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
