const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = async ({ config }) => {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/assets/fonts'),
          to: 'fonts',
        },
        {
          from: path.resolve(__dirname, '../src/assets/favicons'),
          to: 'favicons',
        },
        {
          from: path.resolve(__dirname, '../src/assets/logos'),
          to: 'logos',
        },
      ],
    })
  )

  config.resolve.modules.push(process.cwd() + '/node_modules')
  config.resolve.modules.push(process.cwd() + '/src')

  config.resolve.symlinks = false

  return config
}
