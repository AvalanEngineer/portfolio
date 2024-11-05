import "../../css/projects.css";

import { data } from "../../ts/section_data.ts";
import { ProjectItem } from "../../ts/items/ItemClasses";
import IconFolder from "../icons/folder.tsx";
import IconExternal from "../icons/external.tsx";
import IconGitHub from "../icons/github.tsx";
import { useState } from "react";

function Projects() {
  const [other_projects_details, set_other_projects_details] = useState({
    max:9,
    btn_name:'Show More',
    show_all:false,
  });

  const show = (name:string)=>{
      if(name === 'less'){
        set_other_projects_details((prev)=>({
          ...prev,
          btn_name:'Show More',
          show_all:false,

        }));
      } else {
        set_other_projects_details((prev)=>({
          ...prev,
          btn_name:'Show Less',
          show_all:true,

        }));
      }
  }
  return (
    <div className="projects">
      <div className="section_heading">
        <h3 style={{ color: "lightgreen", textWrap: "nowrap" }}>
          {`0.2  ${data.projects.title}`}
        </h3>

        <hr className="section_heading_hr"></hr>
      </div>
      {/** start of  projects */}
      {data.projects.list
        .slice(0, data.projects.priority)
        .map((project, index) =>
          index % 2 == 0
            ? RenderProject("right", index, project)
            : RenderProject("left", index, project)
        )}

      {/** start of other noteworthy projects*/}
      {data.projects.list.length > data.projects.priority && (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "70px",
              width: "100%",
              gap: "10px",
              height: "fit-content",
            }}
          >
            {/** start of header */}
            <h3 style={{ textAlign: "center", width: "100%" }}>
              Other Noteworthy Projects
            </h3>
            <p style={{ textAlign: "center", width: "100%" }}>
              <strong>View Complete List of Projects/Codes</strong>
            </p>
            {/** start of the projects */}
            <div className="other_projects_container">
              {data.projects.list
                .slice((data.projects.priority - 1), (other_projects_details.show_all?data.projects.list.length:(other_projects_details.max+data.projects.priority)-1))
                .map((project, index) => RenderOtherProject(index, project))}
            </div>
          </div>

          {/** start of show more or less */}
          {(data.projects.list.length > other_projects_details.max)&&
            <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <button
             onClick={()=>show(other_projects_details.btn_name.includes('Less')?'less':'more')}
              type="button"
              className="nav_button"
              style={{
                padding: "15px 30px",
              }}
            >
              {other_projects_details.btn_name}
            </button>
          </div>
          }
          
        </div>
      )}
    </div>
  );
}

const RenderProject = (
  orientation: string,
  index: number,
  project: ProjectItem
) => {
  const onLinkClick = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div>
      {orientation == "right" && (
        <div
          key={index}
          style={{ marginTop: "50px" }}
          className="projects_content"
        >
          <div
            style={{
              display: "flex",
              height: "fit-content",
              width: "100%",
            }}
          >
            <div
              className={
                project.image_type == "app"
                  ? "projects_app_image_container"
                  : "projects_image_container"
              }
            >
              <img src={project.image} />
            </div>
            <div className="projects_right_content">
              <p style={{ textAlign: "right" }}>
                <strong>{project.subTitle}</strong>
              </p>
              <h4 style={{ textAlign: "right" }}>{project.title}</h4>

              <div className="projects_content_right_description">
                <p style={{ textAlign: "right" }}>{project.description}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  flexWrap: "wrap",
                  width: "100%",
                  gap: "0 10px",
                }}
              >
                {project.languages.map((language, index) => (
                  <p key={index}>
                    <strong>{language}</strong>
                  </p>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <IconGitHub
                  onClick={() => onLinkClick(project.github_code_url)}
                  className="github_icon"
                />
                {project.external_url !== "" && (
                  <IconExternal
                    onClick={() => onLinkClick(project.external_url)}
                    className="external_icon"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {orientation == "left" && (
        <div
          key={index}
          style={{ marginTop: "50px" }}
          className="projects_content"
        >
          <div
            style={{
              display: "flex",
              height: "fit-content",
              width: "100%",
            }}
          >
            <div className="projects_left_content">
              <p style={{ textAlign: "left" }}>
                <strong>{project.subTitle}</strong>
              </p>
              <h4 style={{ textAlign: "left" }}>{project.title}</h4>
              <div
                id="projects_content_left_description"
                className="projects_content_left_description"
              >
                <p style={{ textAlign: "left" }}>{project.description}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  flexWrap: "wrap",
                  width: "100%",
                  gap: "0 10px",
                }}
              >
                {project.languages.map((language, index) => (
                  <p key={index}>
                    <strong>{language}</strong>
                  </p>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <IconGitHub
                  onClick={() => onLinkClick(project.github_code_url)}
                  className="github_icon"
                />
                {project.external_url !== "" && (
                  <IconExternal
                    onClick={() => onLinkClick(project.external_url)}
                    className="external_icon"
                  />
                )}
              </div>
            </div>
            <div
              className={
                project.image_type == "app"
                  ? "projects_app_image_container"
                  : "projects_image_container"
              }
            >
              <img src={project.image} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const RenderOtherProject = (index: number, project: ProjectItem) => {
  const onLinkClick = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div key={index} className="other_container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <IconFolder className="folder_icon" />
        <div style={{ display: "flex", gap: "20px", paddingBottom: "20px" }}>
          <IconGitHub
            onClick={() => onLinkClick(project.github_code_url)}
            className="github_icon"
          />
          {project.external_url !== "" && (
            <IconExternal
              onClick={() => onLinkClick(project.external_url)}
              className="external_icon"
            />
          )}
        </div>
      </div>
      <h5>{project.title}</h5>
      <p>{project.description}</p>
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "0",
          gap: "10px 20px",
          marginTop: "auto",
          flexWrap: "wrap",
        }}
      >
        {project.languages.map((language, index) => (
          <p key={index}>
            <strong>{language}</strong>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Projects;
