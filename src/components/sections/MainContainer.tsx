import NavBar from "./NavBar";
import '../../css/main_container.css'
import StyledContainer from "./StyledContainer";

function MainContainer(){

    return(
        <div className="main_container">
           <NavBar></NavBar> 
           <StyledContainer/>
        </div>
    );
}

export default MainContainer;