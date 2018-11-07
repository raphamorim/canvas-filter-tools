import path from 'path'
import webpack from 'webpack'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

const sourcePath = path.join(__dirname, 'src')
const canvasImageFilterPath = path.join(__dirname, '../canvas-image-filter')

const config = {
  entry: path.resolve(sourcePath, 'App.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      canvasImageFilterPath,
      path.resolve(__dirname, 'node_modules'),
      // yarn-workspaces
      path.resolve(__dirname, '../node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: [canvasImageFilterPath, sourcePath],
      },
    ],
  },
  plugins: [],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
        },
      },
    })
  )
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  config.plugins.push(new webpack.HashedModuleIdsPlugin())
}

export default config;
