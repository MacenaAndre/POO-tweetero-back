import { prisma } from "../config/database.js";

async function createUser(data) {
  return prisma.user.create({
    data: {
        userName: data.username,
        avatar: data.avatar
    }
  });
}

async function findUser(username) {
  return prisma.user.findFirst({
    where: {
        userName: username,
    }
  });
}

const signUpRepository = {
    createUser,
    findUser
};
  
export { signUpRepository };