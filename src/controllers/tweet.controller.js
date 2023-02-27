import { tweetService } from "../service/tweet.service.js";

export async function postTweet(req, res) {
    const { username, tweet } = req.body;

    if (!username || !tweet) {
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }
  
    try {
      const user = await tweetService.createTweet({tweet, username});
  
      return res.status(201).send('OK, seu tweet foi criado');
    } catch (error) {
      return res.status(500).send({});
    }
  }

  export async function findUserTweets(req, res) {
    const { username } = req.params;
  
    try {
      const tweets = await tweetService.getUserTweets(username);
  
      return res.status(200).send(tweets);
    } catch (error) {
      return res.status(500).send({});
    }
  }