const express=require('express');
const router=express.Router();

const {createUser,getUserbyId,getUser} = require('../controllers/user');

router.param("userId",getUserbyId);

router.post("/user/create",createUser);
router.get("/user/:userId",getUser);

module.exports=router;