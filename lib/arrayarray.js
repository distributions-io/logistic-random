'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, mu, s[, rand] )
*	Creates a multidimensional array of logistic distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with logistic random numbers
*/
function random( dims, mu, s, rand ) {
	var draw = partial( mu, s, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
