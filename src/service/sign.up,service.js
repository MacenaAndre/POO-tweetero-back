import { SignUp } from "../models/sign.up.model.js";
import { signUpRepository } from "../repositories/sign.up.repository.js";

async function createSignUp({avatar, username}) {
    const user = 
        new SignUp({
          username: username,
          avatar: avatar,
        })

    const postedUser = await signUpRepository.createUser(user);
    return postedUser;
}

const signUpService = {
    createSignUp
};
  
export { signUpService };