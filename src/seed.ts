import prisma from "./plugin/prisma/prisma.service";

async function main() {
  
  // clear existing data
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`

  const users = [
    {
      name: "John Doe",
      email: "john@doe.com",
      dob: new Date("2003-03-29T00:00:00Z")
    },
    {
      name: "Marry Rose",
      email: "marry@rose.com",
      dob: new Date("2003-06-13T00:00:00Z")
    },
    {
      name: "Pak Budi",
      email: "pak@budi.com",
      dob: new Date("2000-01-08T00:00:00Z")
    }
  ]

  for (const user of users) {
    await prisma.user.create({
      data: {
        ...user
      }
    })
  }
}

main()
  .then(async () => {
    console.log("Successfully seeding database!");
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });