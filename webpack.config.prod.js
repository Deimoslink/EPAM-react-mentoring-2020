var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;


module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
            { test: /\.tsx?$/, loader: "babel-loader" },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(jpg|png|ico)$/,
                use: [{ loader: "file-loader",
                        options: { name: "[name].[ext]", outputPath: "assets/" }
                }]
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: 'prod'
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin({})
    ]
};
