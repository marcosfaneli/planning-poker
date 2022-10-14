import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

const app = express()

const serverHttp = createServer(app)

const io = new Server(serverHttp, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

export { serverHttp, io }