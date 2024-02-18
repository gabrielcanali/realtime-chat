type Message = {
    userId: Number,
    content: string,
    created_at: Date
}

type Subscriber = (message: Message) => void

class messagesPubSub {
    private channels: Record<string, Subscriber[]> = {}

    subscribe(channelId: string, subscriber: Subscriber) {
        if (!this.channels[channelId]) {
            this.channels[channelId] = []
        }

        this.channels[channelId].push(subscriber)
    }

    publish(channelId: string, message: Message) {
        if (!this.channels[channelId]) {
            return;
        }

        for (const subscriber of this.channels[channelId]) {
            subscriber(message)
        }
    }
}

export const messageDisplay = new messagesPubSub()