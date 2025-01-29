import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Got some response</h1>");
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running ON PORT ${port}`);
});
