

import {Link} from "react-router-dom";

function NavBar()
{
          const un = localStorage.getItem("un");

         
   return(
        <>
          
                 <div className="nav">
                        {(un==null)&&   <Link to="/login">Login</Link>}
                       
                       
                        {(un!=null)&&   <Link to="/"> Home </Link>}
                        {(un!=null)&& <Link to="/ss">Success Story</Link>}
                        {(un!=null)&&   <Link to="/eq">Enquiry</Link>}
                        {(un!=null)&&   <Link to="/cp"> ChangePassword </Link>}
                        {(un!=null)&&   <Link to="/about"> About </Link>}
                        
                       
                            
                   
                 
                 </div>
           
        </>
   );
}
export default NavBar;