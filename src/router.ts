import { Router } from 'express'
import { UserController } from './controllers/userController';
import { UserServices } from './services';

const router: Router = Router();
const userServices = new UserServices();
const userController = new UserController(userServices);


router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser)
router.post('/users', userController.addUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser)


export default router;