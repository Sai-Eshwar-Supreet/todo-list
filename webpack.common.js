const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output:{
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/template.html"}),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)/i,
                type: "asset/resource"
            },
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};