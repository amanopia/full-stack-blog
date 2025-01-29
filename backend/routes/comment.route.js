import express from "express";
const router = express.Router();

router.get("/comment", (req, res) => {
  res.status(200).send("Comments");
});

export default router;
