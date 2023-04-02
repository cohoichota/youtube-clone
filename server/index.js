import express from 'express';
import { connectDB } from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();
import UserRoutes from './routes/users.js';
import VideoRoutes from './routes/videos.js';
import CommentRoutes from './routes/comments.js';
import AuthRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', AuthRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/video', VideoRoutes);
app.use('/api/comment', CommentRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
