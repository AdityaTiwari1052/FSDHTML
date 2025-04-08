const {Client}=require("pg");
const client =new Client({
    user:'postgres',
    host:'localhost',
    port:5432,
    database:'FSD-IT-B',
    password:'9336'
});
client.connect()
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log("DB error",err.message);
})
const createuser=async()=>{
    try{
        const res=await client.query("insert into users(name,email,age) values ('Abhishek','abhishek@gmail.com',23)")
        console.log("User created successfully",res.rowCount);
    }
    catch(err){
        console.log("insert query error",err.message)
    }
}
createuser();
const getuser=async()=>{
    try{
        const res=await client.query("select * from users order by age desc")
        console.log("User Data",res.rows);
    }
    catch(err){
        console.log("select query error",err.message)
    }
}
// getuser();
