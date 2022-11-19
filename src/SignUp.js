import NavBar from "./NavBar";
import {useState,useRef,useEffect} from "react";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function SignUp()
{
       
         const nav = useNavigate();
         useEffect( () =>{
               let u = localStorage.getItem("un");
               if(u==null)
                     nav("/signup");
               else
                     nav("/");
          },[]);
              
         const[email,setEmail] = useState("");
         const[pw1,setPw1] = useState("");
         const[pw2,setPw2] = useState("");
         const[msg,setMsg] = useState("");
         const rPw1 = useRef("");

        const hEmail = (event) => { setEmail(event.target.value);}
        const hPw1 = (event) => { setPw1(event.target.value);}
        const hPw2 = (event) => { setPw2(event.target.value);}

         const save = (event) =>{
               event.preventDefault();
               if(pw1==pw2) 
               {
                    const auth = getAuth();
                    createUserWithEmailAndPassword(auth,email,pw1)
                     .then(res=>{
                          nav("/login");
                      })
                      .catch(err=>setMsg("issue " + err + "user already exit"))
               }
               else
               {
                     setMsg("password did not match ");
                     setPw1("");
                     setPw2("");
                     rPw1.current.focus();
               }
         }
   return(
     <>
         <center>
               <NavBar/>
               <h1> SignUp </h1>
              <form onSubmit={save}> 
                    <input type="email" placeholder="enter email"
                     onChange={hEmail} value={email} className="s1" />
                    <br/><br/>
                    <input type="password" placeholder="enter password"
                     onChange={hPw1} value={pw1} ref={rPw1} className="s2"/>
                    <br/><br/>
                    <input type="password" placeholder="enter password"
                     onChange={hPw2} value={pw2} className="s3"/>
                    <br/><br/>
                    <input type="submit" value="Register" className="btn2"/>
              </form>
                   <div>
                         <h10> you Want to login??</h10><Link to="/login">Click Here</Link>
                   </div>
                <h2>{msg} </h2>
         </center>
     </>

   );
}
export default SignUp;