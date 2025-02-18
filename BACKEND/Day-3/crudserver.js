const http=require("http");
const server=http.createServer((req,res)=>{
    const data=[{
        name:"Aditya",
        email:"at@gmail.com"
    }]
    const url=req.url;
    if(url=="/users" && req.method=="GET"){
      const ob=data.map((i)=>{
         return {id:i.id,name:i.name ,email:i.email};
      })
       res.end(JSON.stringify(ob));
    }
    else if(url=="/users"&& req.method=="POST"){
            res.statusCode=200;
            let body='';
            req.on("data",(d)=>{
                body+=data.toString();
            })
            req.on("end",()=>{
                const length=data.length;
                const jsonbody=JSON.parse(body);
                const {name,email}=jsonbody;
                const newdata={
                    id:newid,
                    name,
                    email
                }
               data.push(newdata);
            })
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("page not found")
    }
})
server.listen(3001,()=>{
    console.log("server is listen on port 3001");
})