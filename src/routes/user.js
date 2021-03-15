import {Router} from 'express';
import UserController from '../controllers/user' ;

const router=Router();

router.get('/',UserController.getUser)
router.post('/',UserController.postUser)
export default router;