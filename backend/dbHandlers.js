import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function createNewUser(data) {
  try {
    await db.auth.create({
      data: {
        userName: data.userName,
        password: data.password
      }
    });
  } catch (err) {
    console.log(err);
  } finally {
    db.$disconnect();
  }
}

export async function getUser(data) {
  try {
    const user = await db.auth.findFirst({
      where: {
        userName: data.userName,
        password: data.password
      }
    });
    return user;
  } catch (err) {
    console.log(err);
  } finally {
    db.$disconnect();
  }
}
