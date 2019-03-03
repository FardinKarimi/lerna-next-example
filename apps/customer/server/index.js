const fastify = require('fastify')
const Next = require('next')

const { PORT, IS_DEVELOPMENT, BIND_ADDRESS } = require('./config')

const nextApp = Next({ dev: IS_DEVELOPMENT })
const handle = nextApp.getRequestHandler()

nextApp
  .prepare()
  .then(() => {
    const server = fastify()
    // add next.js
    server.get('/*', (req, reply) => handle(req.req, reply.res))

    // start server
    server.listen(PORT, BIND_ADDRESS, error => {
      if (error) {
        console.error('Server init error (server.listen)', error)
        process.exit(1)
      }
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch(error => {
    console.error('Server init error (nextApp.prepare)', error)
    process.exit(1)
  })
