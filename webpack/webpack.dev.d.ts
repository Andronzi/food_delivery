import webpack = require("webpack");
import ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
export const mode: string;
export const devtool: string;
export namespace devServer {
    const hot: boolean;
    const open: boolean;
    const compress: boolean;
    const historyApiFallback: boolean;
}
export const plugins: (webpack.HotModuleReplacementPlugin | ReactRefreshWebpackPlugin | webpack.DefinePlugin)[];
