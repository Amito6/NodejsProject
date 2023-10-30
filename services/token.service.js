require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
const issService = require("./iss.service")

const create = async (request,expiresIn) =>{
    const FormData = request.body;
    const endPoint = request.get("origin");
    const api = request.originalUrl;
    const iss = endPoint+api
  //  console.log(endPoint,api);
    const token = await jwt.sign({
    iss : iss,
    data:FormData,
   },secretKey,{expiresIn:expiresIn}); //2minutes
   return token;

}

const createCustomToken = async (data,expiresIn) =>{
    const FormData = data.body;
    const endPoint = data.endPoint;
    const api = data.originalUrl;
    const iss = endPoint+api
  //  console.log(endPoint,api);
    const token = await jwt.sign({
    iss : iss,
    data:FormData,
   },secretKey,{expiresIn:expiresIn}); //2minutes
   return token;

}


const verify = (request) =>{
      const token = request.body.token
    if(token)
    {
        try {
            
       const tmp = jwt.verify(token,secretKey);
       const requestComingFrom = tmp.iss;
       if(issService.indexOf(requestComingFrom) !=-1){
            return {
                isVerified : true,
                data : tmp.data
            };
       }else{
       
        return {
            isVerified : false,
        };
       }
        
    } catch (error) {
        return {
            isVerified : false,
        };
    }
    }
    else{
        return {
            isVerified : false,
        };
    }

}


module.exports = {
    createToken : create,
    verifyToken : verify,
    createCustomToken:createCustomToken
}