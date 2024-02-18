import { FastifyInstance } from "fastify";
import z from "zod";
import { getMessageHistory } from "../../utils/message-history";
import { messageDisplay } from "../../utils/message-pub-sub";

export async function displayMessage(app: FastifyInstance) {
    app.get('/api/:channel', {websocket: true}, async (connection, request) => {
        const messageParam = z.object({
            channel: z.string().uuid()
        })

        type Message = {
            id?: Number,
            userId: Number,
            channel?: string,
            content: string,
            created_at: Date
        }

        const { channel } = messageParam.parse(request.params)

        connection.socket.send('Getting old messages, please await')

        const messageHistory = await getMessageHistory(channel)
        
        function showMessage (message: Message) {
            connection.socket.send(`${message.content} - UserID: ${message.userId}`)
        }

        messageHistory.forEach(message => showMessage(message))

        messageDisplay.subscribe(channel, (message) => {
            showMessage(message)
        })
    })
}