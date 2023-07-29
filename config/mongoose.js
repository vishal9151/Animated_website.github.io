const mongoose=require('mongoose');
// const env=require('./environment');
mongoose.connect(`mongodb://127.0.0.1/Golf`);
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to mongodb'));
db.once('open',function(){
    console.log('connected to database::Mongodb');
});
module.exports=db;