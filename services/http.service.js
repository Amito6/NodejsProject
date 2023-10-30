const ajax = require("supertest");

const postRequest = async (request) =>{
     const response = await ajax(request.endPoint)//accessing server
        .post(request.api) //api
        .send({token:request.data})//data
       // .end((error,dataRes)=>{
         //  console.log(dataRes.body);
        //})//response receive karne k liye
     return response.body
}

module.exports = { 
    postRequest : postRequest
}