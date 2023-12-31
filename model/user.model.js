const mongo = require("mongoose");
const bcryptService = require("../services/bcrypt.service")
const { Schema } = mongo;

const userSchema = new Schema({
     uid : {
        type:String,
        unique:true
     },
     password : {
        type:String,
        required:true
     },
     createdAt:{
        type:Date,
        default:Date.npw
     }
});


  userSchema.pre("save",async function(next){
   const data = this.password;
   const encryptedPassword = await bcryptService.encrypt(data);
   this.password = encryptedPassword;
   next();
  });

/* userSchema.pre("save",async function(next){
   const data = this.password;
   const encryptedPassword = await bcryptService.encrypt(data);
   this.password = encryptedPassword;
   next();
}) */

module.exports = mongo.model("User",userSchema);