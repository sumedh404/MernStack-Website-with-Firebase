import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom";
import {useState,useRef,useEffect} from "react";
import axios from "axios";
import {getAuth, signOut} from "firebase/auth";
import db from "./Fb";
import {get,ref,set,child} from "firebase/database";
import emailjs from "@emailjs/browser";

function Enquiry()
{

       const nav = useNavigate();
      useEffect ( () =>{
             let u = localStorage.getItem("un");
             if(u==null)
                   nav("/login");
             else
                    nav("/eq");
      },[])

       const rName = useRef();
       const form = useRef();

      
       const[name,setName]= useState("");
       const[phone,setPhone]= useState("");
       const[query,setQuery]= useState("");
       const[email,setEmail] = useState("");
       const[msg,setMsg]= useState("");

       const hName = (event)=>{setName(event.target.value);}
       const hPhone = (event)=>{setPhone(event.target.value);}
       const hQuery =(event)=>{setQuery(event.target.value);}
       const hEmail = (event)=>{setEmail(event.target.value);}
/*
        const save = (event) =>{
           event.preventDefault();
           let urladd ="http://localhost:9001/save";
           let data = {name,phone,email,query};
           axios.post(urladd,data)
           .then(res=> {
                 if(res.data.insertId)
                 {
                     setMsg("we will get back to u soon");
                     setName("");
                     setPhone("");
                     setQuery("");
                     rName.current.focus();
                 }
                 else
                 {
                     setMsg("submitted");
                     setName("");
                     setPhone("");
                     setQuery("");
                     rName.current.focus();
                 }
            })
            .catch(err=>{
                  if(err.code="ERR_NETWORK")
                  {
                     setMsg("server issue");
                     setName("");
                     setPhone("");
                     setQuery("");
                     rName.current.focus();
                   }
            })
        }


*/
      
    const sendEmail = (event) =>{
           event.preventDefault();
           let data = {name,phone,email,query};
           let d = new Date().toString();
           let n = name + "-->" + d;
           let r = ref(db,"student/" + n);
            set(r,data);
            setMsg("Thank You.");
            
             setName("");
             setPhone("");
             setQuery("");
             setEmail("");
          emailjs.sendForm('service_38gt5jz', 'template_ja6qfbz', form.current, 'yPV5ShzNrM1k_6bg9')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
      }, (error) => {
          console.log(error.text);
      });
                
    }

         const lo = (event) =>{
              event.preventDefault();
              const auth = getAuth();
              localStorage.clear();
              signOut(auth)
               .then(res=>nav("./login"))
               .err(err=>console.log(err))
          }
       

  return(
     <>
         <center>
           <NavBar/>
           <form ref={form}onSubmit={sendEmail}>
               <br/>
               
                <input type="text" placeholder="enter your name" name="ename"
                 onChange={hName} value={name} ref={rName} className="e1" required/>
                 <br/><br/>
                
                 <input type="number" placeholder="enter phone number" name="enumber"
                  onChange={hPhone} value={phone} className="e2" required/>
                 <br/><br/>

                 <input type="email" placeholder="enter email" name="eemail"
                  onChange={hEmail} value={email} className="e4" required/>
                 <br/><br/>

                 <textarea placeholder="enter your query" name ="equery" rows={5} cols={22}
                  onChange={hQuery} value={query} className="e3" required></textarea> 
                  <br/>
                  <input type="submit" className="btn5"/> 
           </form>
                  <br/>
                  <form onSubmit={lo}>
                            <input type="submit" value="Logout" className="btn6"/>
               </form>
           <h2>{msg}</h2>
         </center>
      </>
  );
}
export default Enquiry;