const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');
// const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;

const auth = {
  entry: './src/main.ts',
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
      { test: /\.(html|css)$/, loader: 'html-loader',  options: { minimize: true } },
      /*{
        test: /\.css$/,
        "use": [
          "style-loader",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "import": false
            }
          }
        ]
      },*/
      
      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }
      
    ]
  },
  plugins: [
    
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './tsconfig.json',
      entryModule: path.resolve(__dirname, './src/app/app.module#AppModule' )
    }),
    
    // new PurifyPlugin()
    
  ],
  output: {
    path: __dirname + '../../dist/microfrontend/auth',
    filename: 'main.bundle.js'
  },
  mode: 'production'
};

module.exports = auth;