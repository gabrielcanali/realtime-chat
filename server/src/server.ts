import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { sendMessage } from './api/routes/send-message'
import { displayMessage } from './api/ws/display-messages'

const app = fastify()

app.get('/', function handler (request, reply) {
    reply.send({ hello: 'world' })
}) 

app.register(cookie, {
    secret: "my-secret",
    hook: 'onRequest',
    parseOptions: {}
})

app.register(websocket)

app.register(sendMessage)

app.register(displayMessage)

// WS Display Message

app.listen({port: 3000})
    .then(() => console.log('HTTP Server is running'))
    .catch(err => {
        console.log('Error starting server:', err)
        process.exit(1)
    })