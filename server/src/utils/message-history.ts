import { prisma } from "../lib/prisma";

export async function getMessageHistory(channelId: string) {
    const messages = await prisma.message.findMany({
        where: {
            channel: channelId
        },
        orderBy: {
            created_at: "asc"
        }
    })

    return messages
}