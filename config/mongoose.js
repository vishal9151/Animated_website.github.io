const mongoose=require('mongoose');
// const env=require('./environment');
mongoose.connect("mongodb+srv://manglvisha:nCPs1KMFToGWXLDj@golfclub.ehe7jiy.mongodb.net/GolfClub?retryWrites=true&w=majority");
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to mongodb'));
db.once('open',function(){
    console.log('connected to database::Mongodb');
});
module.exports=db;
