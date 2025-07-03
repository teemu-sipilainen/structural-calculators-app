import { Router } from 'express';
import * as beamsController from '../controllers/reinforcedConcreteBeamsController';

const router = Router();

router.get('/', beamsController.getAllBeams);

export default router;