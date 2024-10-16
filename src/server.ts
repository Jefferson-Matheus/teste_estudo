import express, {Request, Response, NextFunction} from 'express';

import 'express-async-errors';

import cors from 'cors';

import path from 'path';

import {router} from './router';

import swaggerUi from 'swagger-ui-express'

import { swaggerConfig } from '../swagger';

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use('/docs', swaggerUi.serve,swaggerUi.setup(swaggerConfig));

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  if(err instanceof Error) {
    return res.status(400).json({message: err.message});
  }

  return res.status(500).json({message: 'Internal Server Error'});
});

app.listen(3000, () => console.log('Server is running on port 3000'));