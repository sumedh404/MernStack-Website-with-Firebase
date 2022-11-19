import NavBar from "./NavBar";
import {useState, useEffect} from "react";
import {getAuth, updatePassword,onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function ChangePassword()
{
      const nav = useNavigate();
      useEffect ( () =>{
             let u = localStorage.getItem("un");
             if(u==null)
                   nav("/login");
      },[])

       const[pw1, setPw1] = useState("");
       const[pw2, setPw2] = useState("");
       const[msg, setMsg] = useState("");

        const hPw1 = (event) =>{setPw1(event.target.value);}
        const hPw2 = (event) =>{setPw2(event.target.value);}

       const change = (event)=>{
                event.preventDefault();
                if(pw1==pw2)
                {
                    const auth = getAuth();
                    onAuthStateChanged(auth,(user)=>{
                         if(user) 
                          {
                             updatePassword(user,pw1)
                              .then(res=>{
                                  localStorage.clear();
                                  setMsg("password Changed successfully");
                                  
                               })
                              .catch(err=>setMsg("issue " + err))
                           }
                     })
                }
                 else
                 {
                       setMsg("password did not match ");
                 }
       }
   return(
        <>
           <center>
                 <NavBar/>
                <h1>Change Password</h1>
                <form onSubmit={change}>
                      <input type="password" placeholder="enter new password" 
                       onChange={hPw1} value={pw1} className="c1"/>
                      <br/><br/>
                       <input type="password" placeholder="confirm new password" 
                       onChange={hPw2} value={pw2} className="c2"/>
                       <br/><br/>
                        <input type="submit" value="Change Password" className="btn4"/>
                        <br/><br/>
                      
                </form>
                   <h2> {msg} </h2>
           </center>
        </>

   );
}
export default ChangePassword;