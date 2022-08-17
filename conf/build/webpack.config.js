const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development", // "production" | "development" | "none"

    entry: {
        hollerUi: path.resolve(__dirname,"../../holler-ui/src/main.tsx"),
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              exclude: [
                /node_modules/
              ],
              use: [
                // apply multiple loaders and options
                {
                    loader: 'ts-loader',
                    options: {
                        configFile: '../../holler-ui/tsconfig.json',
                    }
                  }
              ],
              options: undefined
            },
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
        ]
    },
    resolve: {
        modules: ["node_modules",path.resolve(__dirname, "app")],
        // directories where to look for modules (in order)
        extensions: ['.tsx', '.ts', '.js'],
    },
    // options related to how webpack emits results
    output: {
        path: path.resolve(__dirname, "../../dist/holler-ui"),
        filename: "main.js",
        publicPath: "auto", 
        library: { // There is also an old syntax for this available (click to show)
          type: "umd", // universal module definition
          name: "MyLibrary",
        },
        uniqueName: "my-application", // (defaults to package.json "name")
        // unique name for this build to avoid conflicts with other builds in the same HTML
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Holler App',
        filename: 'index.html',
        template: './holler-ui/index.html'
      })
    ],
    performance: {
        hints: "warning", // "error", false
    },
    devtool: "source-map", 
    target: "web",
    // externals: ["react"],
}