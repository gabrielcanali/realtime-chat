import fastify from 'fastify'

const app = fastify()

app.get('/', function handler (request, reply) {
    reply.send({ hello: 'world' })
}) 

app.listen({port: 3000}).then(() => {
    console.log('HTTP Server is running')
})