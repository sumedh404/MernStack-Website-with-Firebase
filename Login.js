import NavBar from "./NavBar";
import {useState, useEffect} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {initializeApp} from "firebase/app";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import {Link} from "react-router-dom";

function Login()
{
         const un = localStorage.getItem("un");
         const nav = useNavigate();
          useEffect( () =>{
               let u = localStorage.getItem("un");
               if(u==null)
                     nav("/login");
               else
                     nav("");
          },[]);
         const[email,setEmail] = useState("");
         const[pw,setPw] =useState("");
         const[msg, setMsg] = useState("");

         const hEmail = (event) => {setEmail(event.target.value);}
         const hPw = (event) => {setPw(event.target.value);}
         const hMsg = (event) => {setMsg(event.target.value);}

         const check = (event) =>{
                 event.preventDefault();
                 const auth = getAuth();
                 signInWithEmailAndPassword(auth,email,pw)
                 .then(res=>{
                     localStorage.setItem("un", email);
                      nav("./home");
                 })
                 .catch(err=>setMsg("issue " + err))
         }
   return(
         <>
             <center>
                  <NavBar/>
                 <h1> Login  </h1>
                 <form onSubmit={check}>
                       <input type="email" placeholder="enter reg email"
                         onChange={hEmail} value={email} className="l1"/>
                        <br/><br/>
                       <input type="password" placeholder="enter password"
                         onChange={hPw} value={pw} className="l2"/>
                        <br/><br/>
                         <input type="submit" value="Login" className="btn1" />
                       <br/>
                 </form>
                   <div className="lin">
                        <h10>I don't have Account</h10> {(un==null)&&<Link to="/signup">Click Here</Link>}
                        <br/>
                       <h10>Forgot Password?</h10> {(un==null)&&<Link to="/fp">Click Here</Link>}
                   </div>
                  <h2> {msg} </h2>
             </center>
         </>
   );
}
export default Login;