const path = require("path");
const { mode, entry, output, plugins, devServer } = require("../webpack-practise/webpack.config");
const { SDK_VERSION } = require("firebase/app");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
        clean: true
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/home.html"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/home.html"
    })]
    
}