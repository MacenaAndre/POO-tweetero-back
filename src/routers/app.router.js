import { Router } from "express";
import { postSignUp } from "../controllers/sign.up.controller.js";

const appRouter = Router();

appRouter.post("/sign-up", postSignUp);

export { appRouter };