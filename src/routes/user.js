import { Router } from 'express';
import UserController from '../controllers/userControllers';
// 使用router
const router = Router();
// 一個斜線 指現在的位置
router.get('/', UserController.getUser)
router.post('/', UserController.postUser)
router.put('/', UserController.putUser)
router.delete('/', UserController.delectUser)

export default router;