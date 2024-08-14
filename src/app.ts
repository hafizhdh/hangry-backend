import http from "http"
import * as dotenv from "dotenv"
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "./user/user.controller"

dotenv.config()

const server = http.createServer((req, res) => {
  // /api/user
  if (req.url === '/api/user') {
    if (req.method === 'GET') {
      getAllUser(req, res)
    } else if (req.method === 'POST') {
      createUser(req, res)
    } else {
      res.writeHead(404, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({"message": "Endpoint not found"}))
    }
  } 
  // /api/user/:id
  else if (req.url?.match(/\/api\/user\/(.*)/) && req.url.split("/").length === 4) {
    const id = req.url.split("/")[3]
    if (req.method === 'GET') {
      getUser(req, res, id)
    } else if (req.method === 'PUT') {
      updateUser(req, res, id)
    } else if (req.method === 'DELETE') {
      deleteUser(req, res, id)
    } else {
      res.writeHead(404, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({"message": "Endpoint not found"}))
    }
  }
  // base url "/" 
  else if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({"message": "This is simple backend for managing user data"}))
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({"message": "Endpoint not found"}))
  }
})

const PORT = parseInt(process.env.PORT || '7878')

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${PORT}`)
})