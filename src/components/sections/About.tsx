import "../../css/about.css";
import { data } from "../../ts/section_data.ts";
function About() {
  return (
    <div className="about">
      <div className="section_heading">
        <h3 style={{ color: "lightgreen" }}>{"0.1 " + data.about.title}</h3>
        <hr className="section_heading_hr"></hr>
      </div>
      <div className="about_body">
        <div className="about_body_content">
          {data.about.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "fit-content",
            }}
          >
            <ul className='skills-list'>
                {data.about.activities.map((name)=>(
                  <li key={name}>{name}</li>
                ))}
                  
                    </ul>
          </div>
        </div>

        <div className="about_image_container" style={{}}>
          <img src={data.about.image} />
        </div>
      </div>
    </div>
  );
}

export default About;
