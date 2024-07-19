import express from 'express';
import { CalcPrice } from '../controllers/CalculatePrice.js';
import { SignUp, Login, GetUsers } from '../controllers/UserController.js';
import { createOrderController, captureOrderController } from '../controllers/PaymentController.js';


const router = express();
router.use(express.json());

router.get('/getAmount', CalcPrice);
router.post('/SignUp', SignUp);
router.post('/Login', Login);
router.get('/getUsers', GetUsers);
router.post('/createOrder', createOrderController);
router.post('captureOrder', captureOrderController);

export default router;