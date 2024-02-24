<template>
  <main>
    <ChatDisplay/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatDisplay from './components/ChatDisplay.vue'

export default defineComponent({
  components: {
    ChatDisplay
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
  }
</style>