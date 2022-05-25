const app=require('./app')

const port=process.env.PORT || 3000


app.listen(port, ()=>
{
    console.log('Serevr is running at port :  '+ port)
})

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))