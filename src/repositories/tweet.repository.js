import { prisma } from "../config/database.js";

async function createUserTweet(data) {
  return prisma.tweet.create({
    data: {
        userName: data.username,
        tweet: data.tweet
    }
  });
}

async function readUserTweets(username) {
    return prisma.tweet.findMany({
      where: {
          userName: username,
      }
    });
  }

const tweetRepository = {
    createUserTweet,
    readUserTweets
};
  
export { tweetRepository };