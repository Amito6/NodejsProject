const tokenService = require("../services/token.service");
const dbService = require("../services/database.service")
const createUser = async (request,response) =>{
  const token = await tokenService.verifyToken(request);

  if(token.isVerified){
   try {
    const userRes = await dbService.createRecord(token.data,"userSchema")
    response.status(200);
    response.json({
            isUserCreated : true,
            message : "User Created !"
    });
   } catch (error) {
      response.status(500);
      response.json({
        isUserCreated : false,
        message : "Internal Server Error !"
      })
   }

}else{
        response.status(401);
        response.json({
            message:"Permission Denied"
        })
  }
} 

module.exports = {
    createUser:createUser
}