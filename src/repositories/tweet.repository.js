import { prisma } from "../config/database.js";

async function createUserTweet(data) {
  return prisma.tweet.create({
    data: {
        userName: data.username,
        tweet: data.tweet
    }
  });
}

const tweetRepository = {
    createUserTweet
};
  
export { tweetRepository };