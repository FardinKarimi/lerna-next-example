const PORT = parseInt(process.env.PORT, 10) || 3010

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'

const BIND_ADDRESS = '0.0.0.0'

module.exports = {
  PORT,
  IS_DEVELOPMENT,
  BIND_ADDRESS
}
