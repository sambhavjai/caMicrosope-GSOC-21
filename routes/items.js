const express = require('express');
const router = express.Router();

const {createItem,getItembyUserId} = require('../controllers/items');
const { getUserbyId } = require('../controllers/user');

router.param("userId",getUserbyId);

router.post("/item/create",createItem);
router.get("/item/:userId",getItembyUserId);

module.exports = router;