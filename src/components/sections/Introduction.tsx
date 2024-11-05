import '../../css/introduction.css'
import {data} from '../../ts/section_data.ts';

function Introduction(){
    return(
        <div className="introduction">
            <p style={{color:'lightgreen'}}>Hello, my name is</p>
           <h1 style={{textWrap:'nowrap'}}>{data.introduction.title}</h1>
           <h1 style={{opacity:"0.5",textWrap:'wrap',width:'100%'}}>{data.introduction.subTitle}</h1>
           <p>{data.introduction.content}</p>
           <a  href={data.introduction.button_link} className='nav_button' style={{
            padding: '10px 30px',
            marginTop:'15%'
           }}>{data.introduction.button}</a>
        </div>
    );
}

export default Introduction;