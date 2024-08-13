import http from "http"
import { create, getUserById, getUsers, remove, update } from "./user.service"
import HttpException from "../model/http-exception.model"
import { getRequestBody } from "../utils"

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

// POST /api/user
// Create new user
const createUser = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  
  await getRequestBody(req)
    .then(async (body) => {
      if (!body) {
        throw new HttpException(400, "Missing properties")
      }
      const dto = JSON.parse(body)
      const user = await create(dto)
      res.writeHead(201, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(user))
    })
    .catch(error => {
      res.writeHead(error.errorCode, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({message: error.message}))
    })
  
}

// PUT /api/user
// Update user data
const updateUser = async (req: http.IncomingMessage, res: http.ServerResponse, id: string | undefined) => {

  if (!id || !id?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/)) {
    throw new HttpException(400, "Invalid user id")
  }

  await getRequestBody(req)
  .then(async (body) => {
    if (!body) {
      throw new HttpException(400, "Missing properties")
    }
    const dto = JSON.parse(body)
    const updatedUser = await update(dto, id)
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(updatedUser))
  })
  .catch(error => {
    res.writeHead(error.errorCode, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: error.message}))
  })
}

// DELETE /api/user
// Delete an user
const deleteUser = async (req: http.IncomingMessage, res: http.ServerResponse, id: string | undefined) => {
  if (!id || !id?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/)) {
    throw new HttpException(400, "Invalid user id")
  }
  
  try {
    await remove(id)
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({"message": "Successfully delete an user"}))
  } catch (error: any) {
    res.writeHead(error.errorCode, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: error.message}))
  }
}

export {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser
}