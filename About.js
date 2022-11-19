import NavBar from "./NavBar";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


function About()
{
      
       const nav = useNavigate();
       useEffect ( () => {
             let u = localStorage.getItem("un");
             if(u==null)
                   nav("/login");
        });
   return(
        <>
            <center>
                <NavBar/>
                <h1> About </h1>
                <h2>
                     <p> Kamal Sir Teches  </p>
                      <p> JS MERN </p>
                      <p> Python Full stack Devlopment </p>
                      <p> Java Full Stack Devlopment </p>
                </h2>
            </center>
        </>
   );
}
export default About;