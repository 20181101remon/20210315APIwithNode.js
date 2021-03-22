import { Router } from 'express';
import ProductControllers from '../controllers/productControllers';

// 使用router
const router = Router();
// 一個斜線 意旨現在的路由位址
router.get('/', ProductControllers.getProduct)



export default router;

