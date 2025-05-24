<script>
// export default {
//   props: {
//     chat: Object,
//   },
//   data() {
//     return {
//       newMessage: '',
//     };
//   },
//   methods: {
//     sendMessage() {
//       if (this.newMessage.trim() !== '') {
//         this.$emit('sendMessage', {
//           text: this.newMessage
//         })
//         this.chat.messages.push({
//           id: Date.now(),
//           sender: 'Ты',
//           text: this.newMessage,
//         });
//         this.newMessage = '';
//       }
//     },
//   },
// };
</script>
<template>
  <div class="chat-window">
    <!-- <h3>{{ chat.name }}</h3>
    <div class="messages">
      <div v-for="message in chat.messages" :key="message.id">
        <strong>{{ message.sender }}: </strong> {{ message.text }}
      </div>
    </div>
    <input
      type="text"
      v-model="newMessage"
      @keyup.enter="sendMessage"
      placeholder="Введите сообщение..."
    /> -->
  </div>
</template>
<style scoped>
/* .chat-window{
    padding: 15px;
    height: calc(100vh - 60px);
}
.chat-window .messages{
    max-height: 300px;
    overflow-y: auto;
}
.chat-window input{
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    margin-top: 10px;
} */
</style>
