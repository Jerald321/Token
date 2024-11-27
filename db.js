 const mongoose =require("mongoose");
 const app =require('./app')
require("dotenv").config();
 

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    app.listen(8000)
    console.log(" database connected");


}

)
.catch(()=>{
    console.log("not connected database");
    
})