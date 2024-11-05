import "../../css/styled_container.css";
import MainBody from "./MainBody";
import {data} from '../../ts/section_data.ts';
import IconTwitter from "../icons/twitter.tsx";
import IconLinkedin from "../icons/linkedin.tsx";
import IconInstagram from "../icons/instagram.tsx";
import IconGitHub from "../icons/github.tsx";

function StyledContainer() {
  const onLinkClick = (link:string)=>{
    window.open(link,"_blank");
  }
  return (
    <div className="styled_container">
      {/** start of socials */}
      <div id="socials" className="socials">
        <div style={{display:'flex',flexDirection:'column',width:'100%',alignItems:'center',gap:'50px'}}>
          {/** start of github */}
          <IconGitHub onClick={()=>onLinkClick(data.contact.socials.github)} className="social_btn social_btn_active"/>
          {/** start of instagram */}
            <IconInstagram  onClick={()=>onLinkClick(data.contact.socials.instagram)} className="social_btn  social_btn_active"/>
          {/** start of linked in */}
            <IconLinkedin onClick={()=>onLinkClick(data.contact.socials.linkedIn)} className="social_btn  social_btn_active"/>
          {/** start of twiter */}
            <IconTwitter onClick={()=>onLinkClick(data.contact.socials.twiter)} className="social_btn  social_btn_active"/>
        </div>
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            
            padding:'0',
            margin:'0'
        }}>
            <hr style={{
                width:'3px',
                height:'180px',
                backgroundColor:'grey',
                borderRadius:'5px'
            }}></hr>
        </div>
      </div>
      <div id="main_content_container" className="main_content_container">
        <MainBody/>
      </div>
      <div id="email" className="email">
          {/** start of twiter */}
          <div style={{}} className="email_btn">
            <h1><a className="a" style={{color:'lightgreen'}} href={data.introduction.button_link}>{data.email.address}</a></h1>
        </div>
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            
            padding:'0',
            margin:'0'
        }}>
            <hr style={{
                width:'3px',
                height:'180px',
                backgroundColor:'grey',
                borderRadius:'5px'
            }}></hr>
        </div>
      </div>
    </div>
  );
}

export default StyledContainer;
