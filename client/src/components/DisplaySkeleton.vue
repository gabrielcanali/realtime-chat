<template>
    <div class="message">
        <i class="user__image"></i>
        <div class="content">
            <span class="message__info"></span>
            <span class="message__content"></span> 
        </div>
    </div>
    <div class="message self">
        <i class="user__image"></i>
        <div class="content">
            <span class="message__info"></span>
            <span class="message__content"></span> 
        </div>
    </div>
    <div class="message">
        <i class="user__image"></i>
        <div class="content">
            <span class="message__info"></span>
            <span class="message__content"></span> 
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return {}
    }
})
</script>

<style scoped>
    @keyframes pulse-bg {
        0% {
            background-color: rgb(223, 223, 223);
        }
        50% {
            background-color: rgb(236, 236, 236);
        }
        100% {
            background-color: rgb(223, 223, 223);
        }
    }
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
        background-color: rgb(223, 223, 223);
        margin-right: 0.75rem;
        animation: pulse-bg 1s infinite;    
    }
    .content {
        display: flex;
        flex-direction: column;
    }
    .message__info {
        background-color: rgb(223, 223, 223);
        width: 5rem;
        height: 0.5rem;
        margin-bottom: 0.2rem;
        animation: pulse-bg 1s infinite;
    }
    .message__content {
        width: 15rem;
        height: 2rem;
        background-color: rgb(223, 223, 223);
        animation: pulse-bg 1s infinite;
    }
    .message.self {
        align-self: flex-end;   
        flex-direction: row-reverse;
    }
    .message.self .user__image {
        margin-right: 0;
        margin-left: 0.75rem;
    }
    .message.self .content {
        align-items: flex-end;
    }
</style>