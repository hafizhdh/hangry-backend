import prisma from "../plugin/prisma/prisma.service";

export const getUsers = async () => {
  const users = await prisma.user.findMany()

  return users
}