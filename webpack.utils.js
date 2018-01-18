const path = require( 'path' );

module.exports.abs = function abs(...args) {
  return path.resolve( __dirname, ...args );
};