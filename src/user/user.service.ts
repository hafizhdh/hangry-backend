import { createUserDTO } from "../dto/user.dto";
import HttpException from "../model/http-exception.model";
import prisma from "../plugin/prisma/prisma.service";

export const getUsers = async () => {
  const users = await prisma.user.findMany()

  return users
}

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  })

  if (!user) {
    throw new HttpException(404, "User not found")
  }

  return user
}

const validateUserDto = async (dto: createUserDTO) => {
  if (!dto.name || !dto.email || !dto.dob) {
    throw new HttpException(400, "Missing properties")
  }
  
  const date = new Date(Date.parse(dto.dob))
  
  const user = await prisma.user.findUnique({
    where: {
      email: dto.email
    }
  })

  if (user) {
    throw new HttpException(409, "Email has already been taken")
  }

  return {
    name: dto.name,
    email: dto.email,
    dob: date
  }
}

export const create = async (dto: createUserDTO) => {
  const data = await validateUserDto(dto)

  const user = await prisma.user.create({
    data: data
  })

  return user
}