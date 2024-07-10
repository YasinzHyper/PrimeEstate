import express from "express";
import { deleteUser, getUser, getUsers, savePost, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", verifyToken,getUser);

userRouter.put("/:id", verifyToken, updateUser);

userRouter.delete("/:id", verifyToken,deleteUser);

userRouter.post('/save', verifyToken, savePost);

export default userRouter;
