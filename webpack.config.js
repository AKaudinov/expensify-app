//entry point > output bundle file
const path = require('path'); //require is a built in node function
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
    const isProduction = env === 'production';

    const CSSExtract = new ExtractTextPlugin('styles.css'); //pass in the name of the file that you want

    return {
        entry: './src/app.js', // where to start
        output: {
            path: path.join(__dirname, 'public'), //absolute path to where to output the bundle file, use __dirname to provide the path to the project
            //use node path module to join it to the __dirname
            filename: 'bundle.js'
        },
        module: {
            rules:[
                {
                    loader: 'babel-loader', // run js files through babel loader
                    test: /\.js$/,
                    exclude: /node_modules/ //exclude a given set of files
                },
                {   //css-loader - take css and convert it to JS
                    //style-loader - takes css in javascript, and adds it to the DOM
                    // use:[
                    //     'style-loader', inlining of the styles
                    //     'css-loader',
                    //     'sass-loader',
                    // ],
                    test:/\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true //enable source maps on the dev build
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options:{
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                    //make S optional, so the loaders go against scss and css files
                }
            ]
        },
        plugins: [
          CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        //don't use heavy dev source map in production mode
        //inline-source-map: development source map
        //source map - more info can be found at webpack.js.org/devtool
        //cheap-module-eval-source-map source-map has fast rebuild time but average first time build, it's not as expensive
        //as full source map
        devServer:{ //dev server of webpack which can look for changes
            historyApiFallback: true, //routing is handled via client side code
            contentBase: path.join(__dirname, 'public')//webpack dev server needs to know where your public assets are, so it can serve them up
            //no webpack --watch command would be necessary
            //webpack-dev-server can be ran as a script inside package.json
            //it will execute webpack configuration and run everything, and be running in its own watch mode(live reload)

            //webpack-dev-server generates the bundle file in memory, no actual bundle exists after webpack-dev-server runs.
        }
    }
};

//
// module.exports = { //node: expose the object to another file
//     entry: './src/app.js', // where to start
//     output: {
//         path: path.join(__dirname, 'public'), //absolute path to where to output the bundle file, use __dirname to provide the path to the project
//         //use node path module to join it to the __dirname
//         filename: 'bundle.js'
//     },
//     module: {
//         rules:[
//             {
//                 loader: 'babel-loader', // run js files through babel loader
//                 test: /\.js$/,
//                 exclude: /node_modules/ //exclude a given set of files
//             },
//             {//css-loader - take css and convert it to JS
//                 //style-loader - takes css in javascript, and adds it to the DOM
//                 use:[
//                     'style-loader',
//                     'css-loader',
//                     'sass-loader',
//                 ],
//                 test:/\.s?css$/
//                     //make S optional, so the loaders go against scss and css files
//             }
//         ]
//     },
//     devtool: 'cheap-module-eval-source-map',
//     //source map - more info can be found at webpack.js.org/devtool
//     //cheap-module-eval-source-map source-map has fast rebuild time but average first time build, it's not as expensive
//     //as full source map
//     devServer:{ //dev server of webpack which can look for changes
//         historyApiFallback: true, //routing is handled via client side code
//         contentBase: path.join(__dirname, 'public')//webpack dev server needs to know where your public assets are, so it can serve them up
//         //no webpack --watch command would be necessary
//         //webpack-dev-server can be ran as a script inside package.json
//         //it will execute webpack configuration and run everything, and be running in its own watch mode(live reload)
//
//         //webpack-dev-server generates the bundle file in memory, no actual bundle exists after webpack-dev-server runs.
//     }
// };




