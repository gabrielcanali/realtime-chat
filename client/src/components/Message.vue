<template>
    <div class="message" :class="isUser ? 'self' : ''">
        <i class="user__image"></i>
        <div class="content">
            <span class="message__info">
                <span class="message__user">User: {{ message.userId }}</span>
                -
                <span class="message__date">{{ messageDate() }}</span>
            </span>
            <span class="message__content">{{ message.content }}</span> 
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import IMessage from '../interfaces/IMessage';

export default defineComponent({
    props: {
        message: {
            required: true,
            type: Object as PropType<IMessage>
        },
    },
    methods: {
        verifyUser () {
            if (this.message.userId == 2) {
                return true
            } return false
        }
    },
    data() {
        return {
            isUser: this.verifyUser(),
            messageDate: () => {
                const day = this.message.created_at.getDate()
                const month = this.message.created_at.getMonth() + 1
                const year = this.message.created_at.getFullYear()

                return `${day}/${month}/${year}`
            }
        }
    },
})
</script>

<style scoped>
    .message {
        display: flex;
        flex-direction: row;
        align-self: flex-start;
        align-items: center;
        margin: 1rem;
    }
    .user__image {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: rgb(122, 122, 158);
        margin-right: 0.75rem;
    }
    .content {
        display: flex;
        flex-direction: column;
        text-align: left;
        color: black;
    }
    .message__info {
        font-size: 0.75rem; 
        color: rgb(73, 73, 73);
    }
    .message__content {
        font-size: 1.125rem;
    }
    .message.self {
        align-self: flex-end;   
        flex-direction: row-reverse;
    }
    .message.self .user__image {
        margin-right: 0;
        margin-left: 0.75rem;
        background-color: rgb(255, 255, 167);
    }
    .message.self .content {
        text-align: right;
    }
</style>