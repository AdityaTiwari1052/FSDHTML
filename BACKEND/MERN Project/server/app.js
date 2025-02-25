const express= require("express");
const app=express();
const port=3002;
const users=[
    {
        id:1001,
        name:"Aditya Tiwari",
        email:"at999@gmail.com",
        password:"abes"
    }
]
app.use(express.json());
app.get('/users',(req,res)=>{
    res.status(200);
    res.json(users);
})
app.post("/user",(req,res)=>{
    const{id,name,email,password}=req.body;
    const newId=users.length>0?users[users.length-1].id+1:1001;
    
    const newuser={
        id: newId,name,email,password
    }
    users.push(newuser);
    res.status(201);
    res.json({status:"success",message:"data created successfully"})
})
app.delete("/deleteuser/:id",(req,res)=>{
    const uid=req.params.id;
    if(uid!=null){
        const index=users.findIndex(ind=>ind.id==uid)
        if(index!=-1){
            users.splice(index,1);
            res.json({status:"success",message:"user deleted succesfully"})
        }else{
            res.status(400);
            res.json({status:"fail",message:"wrong user id"})
        }
    }
})

app.listen(port,(err)=>{
    try{
        if(err) throw err;
        else{
            console.log(`Server is running on ${port}`)
        }
    }
    catch(err){
        console.log("server Error:",err.message);
    }
})