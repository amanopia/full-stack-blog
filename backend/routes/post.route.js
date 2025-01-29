import express from "express";
const router = express.Router();

router.get("/post", (req, res) => {
  res.status(200).send("This is a post");
});

export default router;
