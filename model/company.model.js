const mongo = require("mongoose");
const { Schema } = mongo;

 const companySchema = new Schema({
         company : {
            type : String,
            unique : true
         },
         email : {
            type : String,
            unique : true
         },
         mobile : {
            type : Number
         },
         emailVerified : {
                type : Boolean,
                default : false
            },
         createdAt :{
            type: Date,
            default : Date.now
         }
});


//company Name validation
companySchema.pre("save",async function(next){
    const query ={
        company : this.company 
    }
    const length = await mongo.model("Company").countDocuments(query);
    if(length>0){
            const cmpError={
                label:"Comapny Name Alreay exists! ",
                field:"company-name"

            }
            throw next(cmpError)
    }else{
            next();
    }
})

//email name unique validation

companySchema.pre("save",async function(next){
    const query ={
        email : this.email 
    }
    const length = await mongo.model("Company").countDocuments(query);
    if(length>0){
        const emailError={
            label:"Company email Alreay exists! ",
            field:"company-email"

        }
            throw next(emailError)
    }else{
            next();
    }
})

module.exports = mongo.model("Company",companySchema);