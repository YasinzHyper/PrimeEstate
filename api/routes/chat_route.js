import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getChats, getChat, addChat, readChat } from "../controllers/chat.controller.js";

const chatRouter = express.Router();

chatRouter.get("/", verifyToken, getChats);

chatRouter.get("/:id", verifyToken,getChat);

chatRouter.post("/", verifyToken, addChat);

chatRouter.post("/read/:id", verifyToken, readChat);

export default chatRouter;
