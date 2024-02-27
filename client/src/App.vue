<template>
  <main>
    <ChatDisplay/>
    <ChatInput/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatDisplay from './components/ChatDisplay.vue'
import ChatInput from './components/ChatInput.vue';

export default defineComponent({
  components: {
    ChatDisplay,
    ChatInput
}
})
</script>
  
<style scoped>
  main {
    background-color: rgb(244, 244, 244);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
</style>