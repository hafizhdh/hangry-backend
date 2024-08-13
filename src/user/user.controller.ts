import http from "http"
import { getUsers } from "./user.service"

const getAllUser = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    const users = await getUsers()
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(users))
  } catch (error: any) {
    res.writeHead(error.errorCode, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(error.message))
  }
}

export {
  getAllUser
}