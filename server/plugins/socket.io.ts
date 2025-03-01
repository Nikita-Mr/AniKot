import type { NitroApp } from 'nitropack';
import { Server as Engine } from 'engine.io';
import { Server } from 'socket.io';
import { defineEventHandler } from 'h3';
import { Anime } from '~/server/modules/anime.model';
import mongoose from 'mongoose';

export default defineNitroPlugin(async (nitroApp: NitroApp) => {
  const engine = new Engine();
  const io = new Server();

  try {
    await mongoose.connect('mongodb://localhost:27017/chat');
  } catch (e) {
    console.error(e);
  }

  let clients = new Map(); // коллекция ключ-значение

  io.bind(engine);

  let messages = [];
  let users = [];

  io.on('connection', (socket) => {

    socket.on('logged_in', function (data) {
      clients.set(data.username, socket.id);
      console.log(socket.id);
      console.log(clients);
    });
    socket.on('chat message', async function (data) {
      const message = new Anime({
        text: data.text,
        receiver: data.receiver,
        sender: data.sender,
      });
      await message.save();
      console.log(message)

      io.to(clients.get(data.receiver)).emit('chat message', {
        text: data.text,
        receiver: data.receiver,
        sender: data.sender,
      }, () => console.log("GHbdtn"));
    });
  });

  nitroApp.router.use(
    '/socket.io/',
    defineEventHandler({
      handler(event) {
        engine.handleRequest(event.node.req, event.node.res);

        event._handled = true;
      },

      websocket: {
        open(peer) {
          // @ts-expect-error private method and property

          engine.prepare(peer._internal.nodeReq);

          // @ts-expect-error private method and property

          engine.onWebSocket(
            peer._internal.nodeReq,
            peer._internal.nodeReq.socket,
            peer.websocket
          );
        },
      },
    })
  );
});
