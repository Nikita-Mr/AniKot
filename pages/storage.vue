<!-- <script setup>
import {io} from "socket.io-client"
if (process.client){
    let socket = io('ws://localhost:3000')
    socket.on("hello", (data)=>{
        console.log(data)
    })
}
</script>
<template>
  <h1>магаз</h1>
  <button @click="addData">Клик</button>
</template>
<style scoped></style> -->

<script>
// import { io } from 'socket.io-client';
// import ChatList from '~/components/ChatList.vue';
// import Sidebar from '~/components/Sidebar.vue';
// import ChatWindow from '~/components/ChatWindow.vue';

// export default {
//   data() {
//     return {
//       chats: [
//         { id: 1, name: 'Ivan', messages: [] },
//         { id: 2, name: 'Nikita', messages: [] },
//       ],
//       selectedChat: null,
//       username: "",
//       connect: false,
//     };
//   },
//   methods: {
//     setSelectedChat(chat) {
//       this.selectedChat = chat;
//     },
//     async loadMessages() {
//       let { data } = await useFetch(`/api/anime/:name`);
//       this.messages = data;
//       console.log(this.messages);
//     },
//     handleConnect() {
//       if (this.username.length > 0) {
//         this.loadMessages();
//         this.connect = true;
//         this.socket = io('ws://localhost:3000');
//         this.socket.emit("logged_in", {
//           username: this.username 
//         })
//         this.socket.on('chat message', (data) => {
//           this.messages.push({ text: data.text, username: data.username });
//         });
//       }
//     },
//     sendMessage() {
//       console.log('Message');
//       this.socket.emit('chat message', {
//         sender: this.username,
//         text: this.text,
//         receiver: this.receiver,
//       });
//     },
//   },
// };

// // if (process.client){
// //   socket = io('ws://localhost:3000')
// //   connect.value = true
// //   socket.on("chat message", (data)=>{
// //     messages.value.push({text:data.text, username:data.username})
// //     console.log(data)
// //   })
// // }
</script>

<template>
  <div class="app">
    <!-- <h1 v-if="!connect">Введите имя</h1>
    <input type="text" v-model="username" @keyup.enter="handleConnect()" v-if="!connect">
    <sidebar v-if="connect" /> 
    <div class="content" v-if="connect" >
      <ChatList :chats="chats" @chat-selected="setSelectedChat" />
      <ChatWindow v-if="selectedChat" :chat="selectedChat" />
    </div> -->
  </div>
</template>

<style>
/* .app {
  display: flex;
}
.content {
  flex: 1;
  display: flex;
} */
</style>
