import { useState, useEffect } from "react";
import "../../css/experiences.css";
import { data } from "../../ts/section_data.ts";
function Experiences() {
  const [content, setContent] = useState({
    tab: "",
    content: {
      title: "",
      subTitle: "",
      paragraphs: [""],
    },
  });
  useEffect(() => {
    if (data.experience.experience_list.length > 0) {
      const n_content = data.experience.experience_list[0];
      setContent({
        tab: n_content.tab,
        content: {
          title: n_content.content.title,
          subTitle: n_content.content.subTitle,
          paragraphs: n_content.content.paragraphs,
        },
      });
    }
  }, []);
  const onTabClick = (index: number) => {
    const n_content = data.experience.experience_list[index];
    setContent({
      tab: n_content.tab,
      content: {
        title: n_content.content.title,
        subTitle: n_content.content.subTitle,
        paragraphs: n_content.content.paragraphs,
      },
    });
  };
  return (
    <div className="experiences">
      <div className="section_heading">
        <h3 style={{ color: "lightgreen",textWrap:'nowrap' }}>{`0.2 ${data.experience.title}`}</h3>

        <hr className="section_heading_hr"></hr>
      </div>
      {/** start of the body content */}
      <div className="experience_body_container">
        <div className="experience_tabs_container">
          {data.experience.experience_list.map((experience, index) => (
            <div className={`experience_tab ${experience.tab === content.tab ? "experience_tab_active" : ""}`} key={index} onClick={()=>onTabClick(index)}>
              <span className="span_l"></span>
              <h5 className="experience_tab_h5"
                style={
                  experience.tab === content.tab ? { color: "lightgreen" } : {}
                }
              >
                {experience.tab}
              </h5>
              <span className="span_b"></span>
            </div>
          ))}
        
        </div>
        <div className="experience_tabs_content_container">
          {/** start of first experience */}
          <div className="experience_section">
            <h4>{content.content.title}</h4>
            <strong>{content.content.subTitle}</strong>
            <ul className="experience_description">
            {content.content.paragraphs.map((paragraph, index)=>(
              (index === 0)
                ?<p style={{fontStyle:'italic',marginLeft:'-15px'}} key={index}>{paragraph}</p>
                :<li style={{color:'grey'}} key={index}>{paragraph}</li>
              
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
