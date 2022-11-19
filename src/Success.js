import NavBar from "./NavBar";
import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import s4 from "./s4.png";
import s6 from "./s6.png";
import s7 from "./s7.png";
import s5 from "./s5.png";
import s8 from "./s8.png";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Success()
{


    const nav = useNavigate();
      useEffect ( () =>{
             let u = localStorage.getItem("un");
             if(u==null)
                   nav("/login");
             else
                  nav("/ss");
      },[])

    return(
       <>
           <center>
           <NavBar/>
              <img src={s1}/>
              <br/><br/>
              <img src={s2}/>
              <br/><br/>
              <img src={s3}/>
              <br/><br/>
              <img src={s4}/>
              <br/><br/>
              <img src={s5}/>
              <br/><br/>
              <img src={s6}/>
              <br/><br/>
              <img src={s7}/>
              <br/><br/>
               <img src={s8}/>
              <br/><br/>
           </center>
       </>
    );
}
export default Success;