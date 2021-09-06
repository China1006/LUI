const path = require('path')
module.exports = {
    mode: 'production',
    entry:{
        fui: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname,'dist/lib'),
        library: 'FUI',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    }
}