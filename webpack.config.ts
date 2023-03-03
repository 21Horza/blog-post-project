import * as path from 'path';
import * as webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        // App start point
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        // where we put our built project
        build: path.resolve(__dirname, 'build'),
        // i
        html: path.resolve(__dirname, 'public', 'index.html'),
        // i
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
