import mongoose from 'mongoose'

{/* Make a connection between the app and data*/}
const connection = {}

//Check connection to database, if it is already connect or we need to connect for the first time.
async function connectDb(){
    //check if we are connected
    if (connection.isConnected){
        //use existing db connection
        console.log('Using existing connection')
        return;
    }

    //use new database connection
    const db = await mongoose.connect(process.env.MONGO_SRV, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('DB is connected')
    connection.isConnected = db.connection[0].readyState;

}

export default connectDb;
