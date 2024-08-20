import express from 'express';
import colors from 'colors';
import cors from 'cors';
import authRouter from './routers/userRouter.js';
import connectiondb from './data/dbcon.js';
import contactRouter from './routers/contactRouter.js';


const app = express();

app.use(cors());
app.use(express.json());    

app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);


const PORT = 5000;

connectiondb().then(() => {
    app.listen(PORT, () => {
        try {
            console.log("Server is running on 5000".bgMagenta);
        } catch (error) {
            console.log(error);
        }
    });
});
