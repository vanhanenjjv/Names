const webpack = require('webpack');
const { execSync } = require('child_process');

function addCommitHash(config) {
  const commitHash = execSync('git rev-parse --short HEAD').toString()
  const commitHashShort = execSync('git rev-parse HEAD').toString()

  config.plugins.push(new webpack.DefinePlugin({
    COMMIT_HASH: JSON.stringify(commitHash),
    COMMIT_HASH_SHORT: JSON.stringify(commitHashShort)
  }))
}

module.exports = function override(config, env) {
  addCommitHash(config)

  return config
}

