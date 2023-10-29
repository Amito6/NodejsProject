const ajax = require("supertest");

const postRequest = (request) =>{
        ajax(request.endPoint)//accessing server
        .post(request.api) //api
        .send({token:request.data})//data
        .end((error,dataRes)=>{
            //console.log(dataRes);
        })//response receive karne k liye
}

module.exports = { 
    postRequest : postRequest
}