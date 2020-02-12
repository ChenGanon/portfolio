import React from "react";

function Project(props) {
  return (
    <div className="card">
    <div className="imgBox">
      <img src={props.projects.image} alt={props.projects.title} />
    </div>
    <div className="contentBox">
      <div className="content">
        <h2>{props.projects.title}</h2>
        <p>
          {props.projects.content}
        </p>
        {props.projects.language!==null?<p>Language:<br/>{props.projects.language}</p>:null}
        {props.projects.link!==null?<p><a href={props.projects.link}>{props.projects.title}</a></p>:null}
        {props.projects.github!==null?<p><a  href={props.projects.github}> <i className="git fab fa-github"></i></a></p>:null}
      </div>
    </div>
  </div>

  );
}

export default Project;
