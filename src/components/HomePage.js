
import Announcements from "./Announcements ";
import Contact from "./Contact";

import EntryPage from "./EntryPage";
import External from "./External";
import Resource from "./Resource";
import Teammate from "./Teammate";


const HomePage=()=>{
    return(
        <>
         <EntryPage/>
         <Announcements/>
         <Teammate/>
         <Resource/>
         <External/>
         <Contact/>
    
         
        </>
       
    )
}
export default HomePage;