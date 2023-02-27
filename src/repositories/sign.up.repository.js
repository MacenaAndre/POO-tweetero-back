import { prisma } from "../config/database.js";

async function createUser(data) {
  return prisma.cart.create({
    data: {
        userName: data.username,
        avatar: data.avatar
    }
  });
}

const signUpRepository = {
    createUser
};
  
export { signUpRepository };