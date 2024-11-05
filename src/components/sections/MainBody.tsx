import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Introduction from "./Introduction";
import Projects from "./Projects";
import '../../css/main_body.css'
import Footer from "./Footer";

function MainBody(){
    return(
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2 main_body">
        {/** start of introduction */}
        <div>
           <Introduction/>
         </div>
          {/** start of about */}
          <div id="about">
            <About/>
          </div>
          {/** start of experiences */}
          <div id="experiences">
            <Experiences/>
          </div>
           {/** start of projects */}
           <div id="projects">
             <Projects/>
           </div>
            {/** start of contact */}
            <div id="contact">
            <Contact/>
          </div>
          {/** start of footer */}
          <div id="footer">
            <Footer/>
          </div>
      </div>
    );
}

export default MainBody;