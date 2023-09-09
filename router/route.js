const express = require("express")
const router = express.Router();

const userController = require("../controller/userController");
const validation = require("../middleware/validation");
const jwtMiddleware = require("../middleware/jwtMiddleware");


router.post("/register",validation.regValid, userController.register);
router.post("/logIn",validation.logInValid, userController.logIn);
router.put("/update/:userId", jwtMiddleware.verifyToken, jwtMiddleware.authorizedUser, userController.update);
router.delete("/delete/:userId",jwtMiddleware.verifyToken, jwtMiddleware.authorizedUser, userController.deleteUser);
router.put("/forgetPassword", userController.forgetPassword);
router.get("/resetPassword", userController.resetPassword);


module.exports = router;