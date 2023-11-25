import express,{Application} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import mongoConfig from './config/dbConnect';
import noteRouter from './routers/noteRoutes';

dotenv.config();
mongoose.connect(mongoConfig.url, mongoConfig.configs);

const app : Application = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    credential: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/note', noteRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`server started on http://localhost:${PORT}`));