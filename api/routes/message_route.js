import express from "express";
import { addMessage } from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const messageRouter = express.Router();

messageRouter.post("/:chatId", verifyToken, addMessage);

export default messageRouter;
