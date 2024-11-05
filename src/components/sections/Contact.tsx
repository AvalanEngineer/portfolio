import '../../css/contact.css'
import {data} from '../../ts/section_data.ts';
function Contact(){
    return(
        <div className="contact">
            {/** start of the header */}
            <div style={{width:'fit-content'}} className='section_heading'>
               <h3 style={{color:'lightgreen',textAlign:'center'}}>{'0.4 '+ data.contact.title}</h3>
            </div>
            <h1>{data.contact.subTitle}</h1>
            <p style={{textAlign:'center'}}>
              {data.contact.content}
            </p>
            <div style={{display:'flex',width:'100%',justifyContent:'center',marginTop:'60px'}}>
      <a href={data.contact.button.link} className='nav_button' style={{
            padding: '10px 30px',
            marginTop:'40px'
           }}>{data.contact.button.name}</a>
      </div>
        </div>
    );
}

export default Contact;