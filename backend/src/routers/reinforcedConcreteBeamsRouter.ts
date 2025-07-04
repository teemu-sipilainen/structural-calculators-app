import express from 'express';
import * as beamsController from '../controllers/reinforcedConcreteBeamsController';

const router = express.Router();

router.get('/', beamsController.getAllBeams);

export default router;