var express = require('express')
var cors =require('cors')
const mysql = require('mysql2');
const { query } = require('express');


const connection =mysql.createConnection({

    host: "localhost",
    user: "id18503464_chokanan",
    password: "<v8@a%Q58Q2d@h&J",
    database: "id18503464_dataapplication"
});

const app=express()
app.use(cors())
app.use(express.json())



app.get('/insertapi/:name/:depart/:tel/:lv',function(req,res,next){
   // insertapi.push(req.body)
    //let json =req.body

    var name=req.params.name;
    var depart=req.params.depart;
    var tel=req.params.tel;
    var lv=req.params.lv;


    connection.query(
    'insert into employee (name,depart,tel,lv) values (?,?,?,?)',     
    [name,depart,tel,lv],

        console.log(name),
        console.log(depart),
        console.log(tel),
        console.log(lv),
        console.log(),


        function(err,result){
            res.json(result);
            console.log(result);
            //console.log(field);
        }
    )
    
})


app.post('/insertdata',function(req,res,next){
    const id=req.params.id;
    connection.query(

        'insert into employee (name,depart,tel,lv) values (?,?,?,?)',
        [req.body.name,req.body.depart,req.body.tel,req.body.lv],
        function(err,result){
            res.json(result);
            //console.log(result);
            //console.log(field);
        }
    )
    
})


app.get('/getid',function(req,res,next){
    const id=req.params.id;
    connection.query(

        'select * from menu where id =?',[id],
        function(err,result){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/select',function(req,res,next){
    connection.query(

        'SELECT * FROM `employee` ',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/selectmenuid/:id',function(req,res,next){
       var id=req.params.id;
    connection.query(

        'select  *from menu where id=? ',[id],
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})

app.get('/selectdetailorder/:id',function(req,res,next){
    var id=req.params.id;
 connection.query(

     'select namemenu,price,(price*number) AS priceupdate,number,imgmenu,datail,table_id from priceup where id=? ',[id],
     function(err,result,field){
         res.json(result);
         console.log(result);
         console.log(field);
     }
 )
 
})


app.get('/selectcart/:id',function(req,res,next){
    var id=req.params.id;
 connection.query(

     'select id,namemenu,price,(price*number) AS priceupdate,number,imgmenu from priceup where table_id=? and checkorder=0',[id],
     function(err,result,field){
         res.json(result);
         console.log(result);
         console.log(field);
     }
 )
 
})



app.get('/selecteditcart/:id',function(req,res,next){
    var id=req.params.id;
 connection.query(

     'select id,namemenu,price,(price*number) AS priceupdate,number,imgmenu from priceup where id=? and checkorder=0',[id],
     function(err,result,field){
         res.json(result);
         console.log(result);
         console.log(field);
     }
 )
 
})



app.get('/selectmenu',function(req,res,next){
    connection.query(

        'select * from menu',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.get('/pork.jpg',function(req,res,next){
    connection.query(

        'select * from menu',
        function(err,result,field){
            res.json(result);
            console.log(result);
            console.log(field);
        }
    )
    
})


app.put('/updatedata',function(req,res,next){
    //const id=req.params.id;
    connection.query(

        'UPDATE employee SET name=?,depart=?,tel=?, lv=? where id=?',
        [req.body.name,req.body.depart,req.body.tel,req.body.lv,req.body.id],
        function(err,result){
            res.json(result);
            //  console.log(result);
            //console.log(field);
        }
    )
    
})




app.get('/users/:id',function(req,res,next){
    const id=req.params.id;
    connection.query(

        'select * from employee where id=?',[id],
        function(err,result){
            res.json(result);
            //console.log(result);
            //console.log(field);
        }
    )
    
})
/*
app.get('/products/:id',function(req,res,next){
    res.json({msg:'api connected!'})
})
*/

app.listen(5230,function(){
    console.log('enable port 5230')
})
