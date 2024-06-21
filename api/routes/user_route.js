import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", verifyToken,getUser);

userRouter.put("/:id", verifyToken, updateUser);

userRouter.delete("/:id", verifyToken,deleteUser);

export default userRouter;
