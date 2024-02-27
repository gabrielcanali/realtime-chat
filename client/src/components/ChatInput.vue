<template>
    <div class="chat-input">
        <textarea ></textarea>
        <input class="submit" type="submit" value=">">
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
    .chat-input {
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        padding: 1rem;
        min-width: 650px;
        background-color: white;
        -webkit-box-shadow: 10px 10px 24px 2px rgba(0,0,0,0.17);
        -moz-box-shadow: 10px 10px 24px 2px rgba(0,0,0,0.17);
        box-shadow: 10px 10px 24px 2px rgba(0,0,0,0.17);
    }
    .chat-input textarea {
        resize: none;
        width: 100%;
        border: 1px solid transparent;
        border-radius: 0.5rem;
        margin-right: 0.5rem;
        padding: 0.5rem;
        background-color: rgb(240, 240, 240);
        scrollbar-width: thin;
        scrollbar-color: #9c9c9c #ffffff;
    }
    .chat-input textarea:focus {
        border: 1px solid transparent;
        outline: none;
        background-color: rgb(234, 234, 234);
    }
    .chat-input textarea::-webkit-scrollbar {
        width: 8px;
    }
    .chat-input textarea::-webkit-scrollbar-track {
        background: #ffffff;
    }
    .chat-input input.submit {
        border-radius: 50%;
        width: 2rem; 
        height: 2rem;
        font-weight: 700;
        font-family: "Courier New", Courier, monospace;
        font-size: 1rem;
        border: none;
        cursor: pointer;
        background-color: rgb(255, 255, 255);
        color: rgb(155, 155, 155);
    }
    .chat-input input.submit:hover {
        color: rgb(129, 129, 129);
        background-color: rgb(240, 240, 240);
    }
</style>