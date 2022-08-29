import express from "express"
import {registerController,loginController,userController,refreshController,productController}  from "../controllers";
const router =express.Router();
import auth from "../middleware/auth"
import admin from "../middleware/admin"
// controllers // routes
router.post('/register',registerController.register)
router.post('/login',loginController.login)
router.post('/refresh',refreshController.refresh)

router.post('/logout',auth,loginController.logout)
router.get('/me',auth,userController.me)

router.post('/products',[auth,admin],productController.store)


router.put('/products/:id',[auth,admin],productController.update)


router.delete('/products/:id',[auth,admin],productController.destroy)

router.get('/products',productController.index)
router.get('/products/:id',productController.show)
export default router;