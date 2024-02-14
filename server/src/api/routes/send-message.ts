import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../../lib/prisma";
import { randomUUID } from "crypto";

export async function sendMessage(app: FastifyInstance) {
    app.post('/api/message/:channel', async (request, reply) => {
        const messageBody = z.object({
            content: z.string(),
        })
        const messageParam = z.object({
            channel: z.string().uuid()
        })

        const { content } = messageBody.parse(request.body) 
        const { channel } = messageParam.parse(request.params)

        let { sessionCookieId } = request.cookies

        if (!sessionCookieId) {
            sessionCookieId = randomUUID()

            reply.setCookie('sessionCookieId', sessionCookieId, {
                path: '/',
                maxAge: 60 * 60 * 24 * 30, // 30 days
                signed: true,
                httpOnly: true
            })
        }

        let user = await prisma.user.findUnique({
            where: {
                sessionId: sessionCookieId
            }
        })

        if (!user) {
            user = await prisma.user.create({
                data: {                        
                    sessionId: sessionCookieId
                }
            })
        }

        const message = await prisma.message.create({
            data: {
                userId: user.id,
                channel,
                content,
            }
        })

        return reply.status(201).send({ 
            message,
            sessionCookieId,
            user
        })
    })
}