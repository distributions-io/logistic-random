'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, mu, s[, rand] )
*	Creates a matrix of logistic distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with logistic random numbers
*/
function random( dims, dt, mu, s, rand ) {
	var out,
		draw,
		i;

	draw = partial( mu, s, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
