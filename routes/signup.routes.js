require("dotenv").config();
const express = require("express");
const router = express.Router();
const ajax = require("supertest");
const secretKey = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const tokenService = require("../services/token.service");
const httpService = require("../services/http.service");

router.post("/",async (request,response)=>{
    let expiresIn = 120;
    const token = await tokenService.createToken(request,expiresIn);
  const companyRes = await httpService.postRequest({
        endPoint : request.get("origin"),
        api: "/api/private/company",
        data: token
    });

    // requesting User Api

    if(companyRes.isCompanyCreated){
        const newUser = {
           body : {
                uid:companyRes.data._id,
                password:request.body.password
           },
           endPoint : request.get("origin"),
           originalUrl : request.originalUrl
        }
    const userToken = await tokenService.createCustomToken(newUser,expiresIn);
    //console.log(userToken);
    const userRes = await httpService.postRequest({
        endPoint : request.get("origin"),
        api: "/api/private/user",
        data: userToken  
    });
      response.json(userRes);
    }else{
        response.json(companyRes);
    }
});

module.exports =router;