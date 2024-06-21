import express from "express";

const postRouter = express.Router();

postRouter.get("/test", (req, res) => {
  res.send("post router works!");
});

export default postRouter;
