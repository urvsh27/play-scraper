// Import modules
import express from 'express';
import appController from '../controllers/appController.js';

// Router object
const router = express.Router();

router.get('/getAppData', appController.funGetAppData);

export default router;
