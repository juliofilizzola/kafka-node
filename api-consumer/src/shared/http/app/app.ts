import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import consumerService from '@kafka/consumer/consumer';
import '@shared/typeorm';

const app = express();

consumerService();

app.use(cors());

export default app;
