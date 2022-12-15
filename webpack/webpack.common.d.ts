declare namespace paths {
    export const src: any;
    export const dist: any;
    const _public: any;
    export { _public as public };
}
import HtmlWebpackPlugin = require("html-webpack-plugin");
export const entry: string;
export const mode: string;
export namespace resolve {
    const alias: {
        "@components": string;
        "@images": string;
        "@resources": string;
        "@icons": string;
        "@redux": string;
        "@src": any;
        "@api": string;
        "@scss": string;
    };
    const extensions: string[];
}
export namespace module {
    const rules: ({
        test: RegExp;
        exclude: RegExp;
        loader: string;
        use?: undefined;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                sourceMap: boolean;
            };
        })[];
        exclude?: undefined;
        loader?: undefined;
    } | {
        test: RegExp;
        use: string;
        exclude?: undefined;
        loader?: undefined;
    } | {
        test: RegExp;
        loader: string;
        exclude?: undefined;
        use?: undefined;
    })[];
}
export namespace output {
    import path = paths.dist;
    export { path };
    export const filename: string;
}
export const plugins: HtmlWebpackPlugin[];
export const stats: string;
export {};
