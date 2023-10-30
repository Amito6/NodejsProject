const mongo = require("mongoose");
const companySchema  = require("../model/company.model");
const userSchema  = require("../model/user.model");
const SchemaList ={
    companySchema : companySchema,
    userSchema : userSchema
}

const url = "mongodb://127.0.0.1:27017/test";
mongo.connect(url);

const createRecord = async (data,schema) =>{
    const currentSchema = SchemaList[schema]
    const dataRes =await new currentSchema(data).save();
    return dataRes;
}

module.exports = {
    createRecord : createRecord
}