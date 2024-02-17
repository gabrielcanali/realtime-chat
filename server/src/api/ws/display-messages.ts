import { FastifyInstance } from "fastify";

export async function displayMessage(app: FastifyInstance) {
    app.get('/api/:channel', {websocket: true}, (connection, request) => {
        
    })
}