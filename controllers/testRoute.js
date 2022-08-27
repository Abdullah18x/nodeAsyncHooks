const express = require("express");
const ah = require('../hook');
const test = require('../services/test')

const router = new express.Router();

router.get('/test', async(req,res) => {
    res.send('Testing')
})

router.post('/createUser', async(req,res) => {
    const body = req.body;
    console.log(req.body);
    const user = await test.createUser(req.body);
    res.send(user);
})

router.get('/testHook', async(req,res) => {
    const reqContext = ah.getRequestContext();
    res.send(reqContext);
})

module.exports = router;