import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routesAPP from '../routes/index.routes';
import consumerService from '@kafka/consumer/consumer';
import '@shared/typeorm';

const app = express();

// consumerService();

app.use(cors());
app.use(routesAPP);

export default app;
