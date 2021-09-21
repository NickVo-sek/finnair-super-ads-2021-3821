const conf = require('./webpack.config.js')

module.exports = (env) => {
  env.watch = true
  const baseConf = conf(env)
  return baseConf
}
