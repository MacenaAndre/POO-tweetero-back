import cors from 'cors';
import express, { json } from 'express';
import { connectDb } from './config/database.js';
import { loadEnv } from './config/envs.js';

loadEnv();

const app = express();

app.use(cors());
app.use(json());

export function init() {
    connectDb();
    return Promise.resolve(app);
}
  
export default app;