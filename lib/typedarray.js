'use strict';

// MODULES //

var ctors = require( 'compute-array-constructors' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( len, dt, mu, s[, rand] )
*	Creates a typed array of logistic distributed random numbers.
*
* @param {Number} len - array length
* @param {String} dt - data type
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} typed array filled with logistic random numbers
*/
function random( len, dt, mu, s, rand ) {
	/* jshint newcap:false */
	var ctor,
		out,
		draw,
		i;

	draw = partial( mu, s, rand );
	ctor = ctors( dt );
	if ( ctor === null ) {
		throw new Error( 'random()::invalid value. Data type does not have a corresponding array constructor. Value: `' + dt + '`.' );
	}
	out = new ctor( len );
	for ( i = 0; i < len; i++ ) {
		out[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
