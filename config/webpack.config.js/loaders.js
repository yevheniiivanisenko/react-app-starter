const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = [
  {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: 'babel-loader',
  },
  {
    test: /\.css$/i,
    use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader'],
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader'],
  },
  {
    test: /\.(csv|tsv)$/,
    use: ['csv-loader'],
  },
  {
    test: /\.xml$/,
    use: ['xml-loader'],
  },
];
