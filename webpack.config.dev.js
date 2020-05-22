var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist-dev"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
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
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
};
