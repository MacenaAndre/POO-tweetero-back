import { Tweet } from "../models/tweet.model.js";
import { signUpRepository } from "../repositories/sign.up.repository.js";
import { tweetRepository } from "../repositories/tweet.repository.js";

async function createTweet({tweet, username}) {

    const user = await signUpRepository.findUser(username);

    const tweetObject = 
        new Tweet({
          username: username,
          tweet: tweet,
          avatar: user.avatar,
        })

    const postedTweet = await tweetRepository.createUserTweet(tweetObject);
    return postedTweet;
}

async function getUserTweets(username) {

    const tweets = await tweetRepository.readUserTweets(username);

    return tweets;
}

const tweetService = {
    createTweet,
    getUserTweets
};
  
export { tweetService };