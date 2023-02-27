import { Router } from "express";
import { postSignUp } from "../controllers/sign.up.controller.js";
import { postTweet } from "../controllers/tweet.controller.js";

const appRouter = Router();

appRouter.post("/sign-up", postSignUp),
appRouter.post("/tweets", postTweet),
appRouter.get("/tweets/:username");

export { appRouter };
