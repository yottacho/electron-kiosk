const rules = require('./webpack.rules');
const webpack = require('webpack');

rules.push(
  {
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    test: /\.(scss)$/, // all scss files will be handled
    // Use loaders in that specific reverse order
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            quietDeps: ["node_modules/bootstrap/**/*.scss"],
          }
        }
      },
    ]
  },
  {
    test: /\.(png|jpe?g|gif|ico|svg)$/, // We will handle of these file extensions
    use: [
      {
        loader: "file-loader",
      }
    ]
  },
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
};
