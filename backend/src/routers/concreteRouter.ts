import express from 'express';
import * as concreteController from '../controllers/concreteController';

const router = express.Router();

router.get('/beams', concreteController.getBeams);

export default router;