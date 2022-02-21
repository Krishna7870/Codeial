const express = require('express');
const app = express();
const port = 8000;

const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));

//all the view that are randered in views are some sort of layouts.
app.use(expressLayouts);

//extract style and scripts from sub pages into the layouts
app.set('layout extractStyles',true );
app.set('layout extractScripts',true );

//use express router(before the server start it has to go to this file)
app.use('/', require('./routes/index'));

//set up the view engine
app.set('view engine','ejs');
app.set('views', './views');

app.listen(port, function(err){

    if(err){
        console.log('Error in running the server:', err);
        
        return;
    }
        console.log(`server is running on port: ${port}`);
});