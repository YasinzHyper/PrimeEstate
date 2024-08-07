import express from 'express';
import postRouter from './routes/post_route.js';
import testRouter from './routes/test_route.js';
import authRouter from './routes/auth_route.js';
import userRouter from './routes/user_route.js';
import chatRouter from './routes/chat_route.js';
import messageRouter from './routes/message_route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// app.use(cors({origin: process.env.CLIENT_URL, credentials: true}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);
app.use('/api/test', testRouter);
app.use('/api/auth', authRouter);
app.use('/api/chats', chatRouter);
app.use('/api/messages', messageRouter);

app.listen(8800, () => {
    console.log('Server is running on port 8800');
})