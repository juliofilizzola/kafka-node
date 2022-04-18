import "reflect-metadata"
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routesAPP from '../routes/index.routes';

const app = express();

app.use(cors());
app.use(routesAPP);

export default app;
