const 
  { abs } = require( './webpack.utils' ),
  { DllPlugin } = require( 'webpack' ),
  ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
  CleanWebpackPlugin = require( 'clean-webpack-plugin' ),
  extractCSS = new ExtractTextPlugin( {
    filename: 'vendor_[name].css',
    allChunks: true,
  } );

module.exports = {
  entry: {
    bundle: [abs( 'lib' ), abs( 'lib', 'index.css' )],
  },
  output: {
    path: abs( 'lib', 'build' ),
    filename: 'vendor_[name].js',
    library: 'vendor_[name]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract( {
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            }
          ],
        } ),
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin( abs( 'lib', 'build' ) ),
    extractCSS,
    new DllPlugin( {
      name: 'vendor_[name]',
      path: abs( 'lib', 'manifest.json' ),
    } )
  ]
};
