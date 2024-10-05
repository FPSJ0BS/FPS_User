import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';

/**
 * Load JS, JSX, TS, and TSX files through Babel
 */
const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/, 
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }] 
      ],
    },
  },
};

// Common resolve configuration
const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  alias: {
    '@': path.resolve(__dirname, 'src'), // Set alias for @
    '@Context': path.resolve(__dirname, 'src/Context'),
    '@Assets': path.resolve(__dirname, 'src/assets'),
    '@Container': path.resolve(__dirname, 'src/Container'),
    '@Hooks': path.resolve(__dirname, 'src/Hooks'),
    '@Navigator': path.resolve(__dirname, 'src/Navigator'),
    '@Components': path.resolve(__dirname, 'src/Components'),
    '@Repo': path.resolve(__dirname, 'src/Repo'),
    '@Utils': path.resolve(__dirname, 'src/Utils'),
    '@Const': path.resolve(__dirname, 'src/Const'),
  },
};

const serverConfig = {
  
  target: 'node', 
  mode: 'development', 
  entry: './server/server.tsx', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js', 
  },
  module: {
    rules: [
      babelLoader, 
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      PORT: 3001, 
    }),
  ],
  resolve: resolve, 
};

const clientConfig = {
  target: 'web', 
  mode: 'development', 
  entry: './src/main.tsx', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    publicPath: '/static', 
    filename: 'client.js', 
  },
  module: {
    rules: [
      babelLoader, 

     
      {
        test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader', 
          {
            loader: 'postcss-loader', // Adds Tailwind CSS support
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/, 
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Resolves CSS imports
          'sass-loader',  // Compiles SCSS to CSS
        ],
      },

      // Rule for image files
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', 
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'), 
    }),
  ],
  resolve: resolve, 
};

export default [serverConfig, clientConfig];
