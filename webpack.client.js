const path = require('path')

module.exports = {
    target: 'node',
      entry: './src/client.js',
      output: {
        path: path.resolve(__dirname, "build/public"),
        publicPath: '/build/public',
        filename: "client_bundle.js"
      }, 
    module: { 
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: '/node_modules/',
          options: {
            presets: [
              "react",
              "stage-0",
              ["env",{
                  targets: { browsers: ["last 2 version"]}
                }]
            ]
          }
        }
      ]
    }
  };