const express = require("express");
const cors = require("cors");
const{MongoClient} = require("mongodb");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

function sendEmail(name,txt)
{
    
        let transporter = nodemailer.createTransport({
               service:"gmail",
               auth:{
                     user:"salvesumedh91@gmail.com",
                     pass:"xyefvcghtsqdruym"
                }
       })

        let mailOptions={
            from: "salvesumedh91@gmail.com",
            to:"salvesumedh91@gmail.com",
            subject:"Enquiry from " + name,
            text:txt
        }
        
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err)
                  console.log("mail err", err);
            else
                 console.log("mail send ",info.response);
        })
}

/*
  const url ="mongodb://localhost:27017";

   app.post("/save",(req,res)=>{
       MongoClient.connect(url,(err,database)=>{
           if(err)
           {
               console.log("server issue",err);
           }
           else
           {
              const dbo = database.db("mernproject");
              let data = {"name":req.body.name, "phone":req.body.phone,"query":req.body.query};
              sendEmail(req.body.name,req.body.phone + " " + req.body.query)
              dbo.collection("student").insertOne(data,(err,result)=>{
                    if(err)
                         res.send(err);
                    else
                         res.send(result);
              })
           }
       })
 })
*/
app.listen(9001, ()=>{console.log("server ready @ 9001")})
