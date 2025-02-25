const express= require("express");
const app= express();
app.use(express.json())
const Port= 3000;
const products=[{
    id:101,
    title:"Laptop",
    brand:"HP",
    price:52000,
    quantity:5
},
{
    id:102,
    title:"Laptop",
    brand:"asus",
    price:52000,
    quantity:5
}
];
app.get("/products",(req,res)=>{
    res.status(200).json(products);

})
app.get("/product/:id",(req,res)=>{
   const pid= req.params.id;
   const index=products.findIndex(ind=>ind.id==pid);
   if(index==-1){
    res.status(400).json({status:"fail",message:"product is not found"})
   }
   else{
    res.status(200).json({status: "success",message: "Product id found",data: products[index]})   
}

})
app.post("/product",(req,res)=>{
    const {title,brand,price,quantity}=req.body;
    if(!title||!brand ||!price||!quantity){
        res.status(400).json({status:"success",message:"product created successfully"})
    }
    else{
        // const newId=product.length>0?(products[products.length-1].id+1):10
        const newId=Math.floor((Math.random()*900000)+100000)
        const newProduct={
            id:newId,title,brand,price,quantity

        }
    }
    const newProduct={
        id,title,brand,price,quantity
    }
    products.push(newProduct);
    res.status(201).json({status:"success",message:"product created successfully"})
})


app.listen(Port,(err)=>{
    try{
     if(err) throw err;
     else{
    console.log(`server is running on port ${Port}`);
      }
    }
 catch(err){
    console.log(`error in running`)
 }
})