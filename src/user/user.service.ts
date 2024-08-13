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