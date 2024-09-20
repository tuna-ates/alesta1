
import "../styles/EntryPage.css"
import image1 from "../icons/image1.jpeg"
import logo from "../icons/Alesta_Logo-removebg-preview.png"
import Header from "./Header";

const EntryPage=()=>{
    return(
        <section id="entryPage">
        <div className="containerEntryPage">
            <div className="navBar">
               <Header/>
            </div>
          
            <div className="imageContainer">
               
                     <img className="image1" src={image1}/>    
                   
        
                    <img className="alestaLogo" src={logo}/>  
              
                         <p className="welcome_text">Hoşgeldiniz</p> 
             
                   
             
                        
                     
                        
            </div>
        
        </div>
        </section>

    )
}
export default EntryPage;