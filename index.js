const express=require('express');
const app=express();
const port =8550;
const path=require('path');
const db=require('./config/mongoose');
const User=require('./models/user');

// Define the directory where your static files (e.g., CSS, JavaScript, images) are located
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views','./views');


app.get('/', function (req, res) {
//   const indexPath = path.join(__dirname, 'views', 'index.html');
  return res.render('index');
});

app.get('/contact',function(req,res){
    // const indexPath = path.join(__dirname, 'views', 'contact.html');
    return res.render('contact');
})
app.post('/contact',async function(req,res){
    try {
        let user=User.find(req.body);
        if(user){
            return res.render('index',{
                user: req.body
            });
        }
        else{
        await User.create(req.body);
        console.log(req.body)
        }
        // const indexPath = path.join(__dirname, 'views', 'index.html');
        return res.render('index',{
            user: req.body
        });

    } catch (error) {
        if(error){
            console.log("error in creating the user",error);
        }
    }
})



app.listen(port,function(err){
    if(err){
        console.log("error in running the server",err);
    }
    console.log(`server is runnig at port ${port}`);
})