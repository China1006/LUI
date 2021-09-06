const path = require('path')
module.exports = {
    entry:{
        fui: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname,'dist/lib'),
        library: 'FUI',
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
}