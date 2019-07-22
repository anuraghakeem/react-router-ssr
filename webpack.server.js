const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
      entry: './server.js',
      output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/build',
        filename: "bundle.js"
      }, 
    module: { 
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              "react",
              "stage-0",
              [
                "env",
                {
                  targets: {
                    browsers: ["last 2 version"]
                  }
                }
              ]
            ]
          }
        }
      ]
    },
    externals: [webpackNodeExternals()]
  };