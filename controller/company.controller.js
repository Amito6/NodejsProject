
const tokenService = require("../services/token.service");
const dbService = require("../services/database.service")

const createCompany = async (request,response)=>{
   const token = tokenService.verifyToken(request);
   //now you can store Data in Database
   if(token){
    const data = token.data;
    try {
        const dataRes = await dbService.createRecord(data,"companySchema");
        response.status(200);
        response.json({
            isCompanyCreated : true,
            message : "Company created",
            data : dataRes
        });
    } catch (error) {
        response.status(409);
        response.json({
            isCompanyCreated : false,
            message : error
        })
    }
   }
   else{
     response.status(401);
     response.json({
        message : "Perission denied kyuki unauthorised user"
     })

   }
 // const dataRes = await dbService.createRecord(data);
 // console.log(dataRes);
}


module.exports = {
    createCompany: createCompany
}