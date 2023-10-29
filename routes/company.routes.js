const express = require("express");
const router = express.Router();

router.post("/",(request,response)=>{
    response.json({
        message : "Company Api requested"
    })
})

module.exports = router;