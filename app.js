require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const authRouter = require("./routes/auth.routes");
const listingRouter = require("./routes/listing.routes");
const messagesRouter = require("./routes/messages.routes");
const forumRouter = require("./routes/forum.routes");
const commentsRouter = require("./routes/comments.routes");
const diyRouter = require("./routes/diy.routes");
const userRouter = require("./routes/user.routes");
const newsRouter = require("./routes/news.routes");

const PORT = process.env.PORT;

const app = express();

// app.use(cors({
//     origin: [process.env.FRONTEND_URL]
// }));

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/", newsRouter);

app.use("/auth", authRouter);

app.use("/listings", isAuthenticated, listingRouter);

app.use("/messages", isAuthenticated, messagesRouter);

app.use("/forum", isAuthenticated, forumRouter);

app.use("/comments", isAuthenticated, commentsRouter);

app.use("/diy", isAuthenticated, diyRouter);

app.use("/user", isAuthenticated, userRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then((x) => {
    console.log("connected to db", x.connections[0].name);
    app.listen(PORT, () => {
      console.log("Server started on port" + PORT);
    });
  })
  .catch((err) => console.log("error connecting to db", err));
