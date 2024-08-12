import http from "http"
import * as dotenv from "dotenv"

dotenv.config()

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({"message": "This is simple backend for managing user data"}))
})

const PORT = process.env.PORT || 7878

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})