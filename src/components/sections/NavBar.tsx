import { useState } from 'react';
import '../../css/navbar.css'
import logo from '../../images/pic.jpg';
import {data} from '../../ts/section_data.ts';
import IconClose from '../icons/close.tsx';
import IconMenu from '../icons/menu.tsx';

function NavBar(){
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);
  const onClose = ()=>{
    setOpenMenu(false);
  }
  const onMenuClick = ()=>{
    setOpenMenu(true);
    setShow(true);
  }
   return(
      <div id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3 nav_bar">
        <div className='nav_logo'>
          <img src={logo}/>
        </div>
        <div style={{
          display:'flex',
          alignContent:'center',
          width:'fit-content',
          height:'fitcontent',
          margin:0,
          gap:'0px 5px',
          
        }}>
          <div id='nav_desktop'>
             {/** about tab */}
          <div className='nav_tab'>
          <h3 style={{color:'lightgreen'}}>01.</h3>
          <a className='a' href='#about' ><h3>{data.navbar.about}</h3></a>
          </div>
          {/** experience tab */}
          <div className='nav_tab'>
          <h3 style={{color:'lightgreen'}}>02.</h3>
          <a className='a' href='#experiences' ><h3>{data.navbar.experience}</h3></a>
          </div>
          {/** project tab */}
          <div className='nav_tab'>
          <h3 style={{color:'lightgreen'}}>03.</h3>
          <a className='a' href='#projects' ><h3>{data.navbar.projects}</h3></a>
          </div>
          {/** contact tab */}
          <div className='nav_tab' >
          <h3 style={{color:'lightgreen'}}>04.</h3>
          <a className='a' href='#contact' ><h3>{data.navbar.contact}</h3></a>
          </div>

          {/** start of resume button */}
          <a  target="_blank" href={data.navbar.resume.link} className='nav_button'>{data.navbar.resume.name}</a>
          </div>
          <div id='nav_mobile'>
            <IconMenu onClick={onMenuClick} className='menu_btn'/>
          </div>
         
        </div>

        {show&&
           <div className={`mobile_nav ${openMenu?'slide_in':'slide_out'}`}>
           <div style={{
            display:'flex',
            width:'100%',
            marginBottom:'auto',
            height:'fit-content'
           }}>
              <IconClose onClick={onClose} className='close_btn'/>
           </div>
           {/** start of body */}
           <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            width:'fit-content',
            margin:'auto',
            alignItems:'center',
            justifyContent:'center'
           }}>
               {/** about tab */}
            <div className='nav_tab_mobile'>
            <h3 style={{color:'lightgreen'}}>01.</h3>
            <a className='a' href='#about' ><h3>{data.navbar.about}</h3></a>
            </div>
            {/** experience tab */}
            <div className='nav_tab_mobile'>
            <h3 style={{color:'lightgreen'}}>02.</h3>
            <a className='a' href='#experiences' ><h3>{data.navbar.experience}</h3></a>
            </div>
            {/** project tab */}
            <div className='nav_tab_mobile'>
            <h3 style={{color:'lightgreen'}}>03.</h3>
            <a className='a' href='#projects' ><h3>{data.navbar.projects}</h3></a>
            </div>
            {/** contact tab */}
            <div className='nav_tab_mobile'>
            <h3 style={{color:'lightgreen'}}>04.</h3>
            <a className='a' href='#contact' ><h3>{data.navbar.contact}</h3></a>
            </div>
  
            {/** start of resume button */}
            <a  target="_blank" href={data.navbar.resume.link} style={{ padding: "10px 35px"}} className='nav_button'>{data.navbar.resume.name}</a>
           </div>
          </div>
        }
      </div>
  
   ); 
}


export default NavBar;