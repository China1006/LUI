const base = require('./webpack.config')
module.exports = Object.assign({},base,{
    mode: 'production',
    //外部依赖，应用场景：‘应用依赖包名’
    externals: {
        react:{
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    }
})