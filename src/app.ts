import http from "http"
import * as dotenv from "dotenv"
import { getAllUser, getUser } from "./user/user.controller"

dotenv.config()

const server = http.createServer((req, res) => {
  // /api/user
  if (req.url === '/api/user') {
    if (req.method === 'GET') {
      getAllUser(req, res)
    }
  } 
  // /api/user/:id
  else if (req.url?.match(/\/api\/user\/(.*)/) && req.url.split("/").length === 4) {
    const id = req.url.split("/")[3]
    if (req.method === 'GET') {
      getUser(req, res, id)
    } 
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({"message": "This is simple backend for managing user data"}))
  }
})

const PORT = process.env.PORT || 7878

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})