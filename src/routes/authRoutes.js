import { Router } from 'express';
import * as controller from '../controllers/authController.js';

const router = Router();

router.post('/register', controller.register);
router.post('/login', controller.login);

export default router;
