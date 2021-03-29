import { Router } from 'express';
import user from './user';
import product from './product';
// 不太懂這句
const router = Router();

router.use('/user', user);
router.use('/product', product);
export default router;
// export出去給別人使用,這邊會丟回給app.js引入點使用
