//importing express into  index.js file
const express=require('express');
//saving all the features of express function in app(which is of const type)

const db=require('./config/mongoose');

//require db Schema
const TaskList=require('./models/task');

const app=express();

//port where our server will run
const port=8000;
//setting ejs engine
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views','./views');

//using assets folder
app.use(express.static('assets'));

//using express router with the help of middleware
//any request come to this server directly goes to .routes/index.js file
app.use('/',require('./routes'));

//using body parser
// const bodyParser=require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));



//whenever our server run if it has any error then it will print on console 
//with error massege otherwise print server is ruunng and up on console
app.listen(port,function(err)
{
 if(err)
 {
     console.log('Error in running server:',err);
 }
     console.log('Server is ruuing and up on port number:',port);
});