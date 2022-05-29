const express=require('express');
const app=express();
const port=process.env.PORT || 8000
const imp=require('./data.json')
const cors=require('cors');
app.use(cors());
app.use("/assets",express.static("assets"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/doi',(req,res)=>{
    // console.log(imp);
    var min=1;
    var max=12;
    var diff=max-min;
    var rand=Math.random();
    rand=Math.floor(rand*diff);
    rand=rand+min;
    var x=""+rand;
    // var st='{"src":'+'"'++'"}';
    res.send(
        [
            {
                "src":imp[0][x]
            }
        ]
    );
});

app.listen(port);