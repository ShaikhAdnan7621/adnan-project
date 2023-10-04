import mongoose from "mongoose";
export async function Connect(){
    try {
        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("mongodb connected succesfully")
        })
        connection.on('error',(err)=>{
            console.log('mongodb connectied err "check"  ' , err );
            process.exit()
        })
    } catch (error) {
        console.log("somethisn want wrong");
        console.log(error);
    }
}