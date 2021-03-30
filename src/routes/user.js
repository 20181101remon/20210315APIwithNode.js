import { Router } from 'express';
import UserController from '../controllers/userControllers';
import UserMiddleware from '../middleware/user';

require('dotenv').config();

// 使用router
const router = Router();
// 一個斜線 指現在的位置
router.get('/', UserMiddleware.JwtAuthenticate, UserController.getUser);
router.post('/', UserController.postUser);
router.post('/find', UserMiddleware.Authenticate);
// router.put('/', UserController.putUser)
// router.delete('/', UserController.delectUser)

export default router;
