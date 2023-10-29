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
    httpService.postRequest({
        endPoint : request.get("origin"),
        api: "/api/private/company",
        data: token
    });
});

module.exports =router;