const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller")

//get request

router.post("/",(request,response)=>{
    userController.createUser(request,response)


    //response humne controller se dena hai
   // console.log(request.body);
    //response.send("success")
});

module.exports = router