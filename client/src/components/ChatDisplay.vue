<template>
    <div class="chat-display">
        <DisplaySkeleton v-if="isLoading"/>
        <Message v-else v-for="message in messages" :message="message" :key="message.id"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Message from './Message.vue';
import IMessage from '../interfaces/IMessage';
import getMessages from '../http/messages.ts'
import DisplaySkeleton from './DisplaySkeleton.vue'

export default defineComponent({
    components: { Message, DisplaySkeleton },
    data() {
        return {
            messages: [] as IMessage[],
            isLoading: true,
        }
    },
    async created() {
        this.messages = await getMessages('nal do canal').then(messages => {
            this.isLoading = false
            return messages
        });
    },
})
</script>

<style scoped>
    .chat-display {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        padding: 2rem;
        min-width: 650px;
        background-color: white;
        -webkit-box-shadow: 10px 10px 24px 2px rgba(0,0,0,0.17);
        -moz-box-shadow: 10px 10px 24px 2px rgba(0,0,0,0.17);
        box-shadow: 10px 10px 24px 2px rgba(0,0,0,0.17);
    }
</style>