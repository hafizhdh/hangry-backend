import http from "http"
import { getUserById, getUsers } from "./user.service"
import HttpException from "../model/http-exception.model"

// GET /api/user
// Retrieve all users data
const getAllUser = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    const users = await getUsers()
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(users))
  } catch (error: any) {
    res.writeHead(error.errorCode, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: error.message}))
  }
}

// GET /api/user/:id
// Retrieve specific user data
const getUser = async (req: http.IncomingMessage, res: http.ServerResponse, id: string | undefined) => {
  try {
    if (!id || !id?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/)) {
      throw new HttpException(400, "Invalid user id")
    }
    const user = await getUserById(id)
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(user))
  } catch (error: any) {
    res.writeHead(error.errorCode, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: error.message}))
  }
}

export {
  getAllUser,
  getUser
}