const webpack = require('webpack');

function addCommitHash(config) {
  const commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString()

  config.plugins.push(new webpack.DefinePlugin({
    COMMIT_HASH: JSON.stringify(commitHash)
  }))
}

module.exports = function override(config, env) {
  addCommitHash(config)

  return config
}

