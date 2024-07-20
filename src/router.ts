import { Router, Request, Response } from 'express';
import { CrateTaskController } from './controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello World!' });
});

router.post('/task', new CrateTaskController().handle);

export {router};