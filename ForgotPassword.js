import NavBar from "./NavBar";
import {useState} from "react";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from "react-router-dom";
 
function ForgotPassword()
{
       const nav = useNavigate();
       const [email,setEmail] = useState("");
       const [msg,setMsg] = useState("");

       const hEmail = (event) => {setEmail(event.target.value);}
 
       const reset = (event) =>{
             event.preventDefault();
             const auth = getAuth();
             sendPasswordResetEmail(auth,email)
              .then(res=>{nav("/login");
                  setMsg("check your Email");
               })
              .catch(err=>setMsg("issue " + err))
       }
   return(
        <>
           <center>
                <NavBar/>
                <h1> Forgot Password </h1>
                <form onSubmit={reset}>
                     <input type="email" placeholder="enter reg email"
                       onChange={hEmail} value={email} className="f1"/>
                      <br/><br/>
                      <input type="submit" value="Reset" className="btn2"/>
                </form>
                <h2> {msg} </h2>
           </center>

        </>

   );
}
export default ForgotPassword;