import NavBar from "./NavBar";
import home from "./home.PNG";
import python from "./python.PNG";
import ml from "./ml.PNG";
import {useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import {getAuth, signOut} from "firebase/auth";



function Home()
{
      const[user, setUser] = useState("");
       const nav = useNavigate();

       useEffect( () =>{
             let u = localStorage.getItem("un");
             if(u==null)
             {
                  nav("./login");
             }
             else{
                 setUser(u);
             }
 
        },[])

         const lo = (event) =>{
              event.preventDefault();
              const auth = getAuth();
              localStorage.clear();
              signOut(auth)
               .then(res=>nav("./login"))
               .err(err=>console.log(err))
          }
   return(
        <div >
            <center>
                 <NavBar/>
                    <h1> Welcome Student's </h1>
                        <img src={home}/>
                         <br/><br/>
                         <img src={python}/>
                          <br/><br/>
                          <img src={ml}/>
                         <br/><br/>
                   
                        <br/>
                   
            </center>
              
        </div>
   );
}
export default Home;