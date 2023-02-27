import { Tweet } from "../models/tweet.model.js";
import { signUpRepository } from "../repositories/sign.up.repository.js";
import { tweetRepository } from "../repositories/tweet.repository.js";

async function createTweet({tweet, username}) {

    const user = await signUpRepository.findUser(username);

    const tweet = 
        new Tweet({
          username: username,
          tweet: tweet,
          avatar: user.avatar,
        })

    const postedTweet = await tweetRepository.createUserTweet(tweet);
    return postedTweet;
}

const tweetService = {
    createTweet
};
  
export { tweetService };