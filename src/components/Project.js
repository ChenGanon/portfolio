import React from "react";

function Project(props) {
  const i = props.index;

  return (
    <div className="card">
      <div className="imgBox">
        <div className="slide_img" id="one">
          {(props.projects.image.length===1)? (
            <img src={props.projects.image[0]} alt={props.projects.title} />
          ) : i===0?<img src={props.projects.image[0]} alt={props.projects.title} />:<iframe src={props.projects.image[1]}></iframe>
            
          }
          {props.projects.image.length===1?null:
          <label className="prev"  onClick={props.change}>
            <span></span>
          </label>
          }
          {props.projects.image.length===1?null:<label className="next" onClick={props.change}>
            <span></span>
          </label>}
          
        </div>
      </div>

      <div className="contentBox">
        <div className="content">
          <h2>{props.projects.title}</h2>
          <p>{props.projects.content}</p>
          {props.projects.language !== null ? (
            <p>
              Language:
              <br />
              {props.projects.language}
            </p>
          ) : null}
          {props.projects.github !== null ? (
            <p>
              <a href={props.projects.github} target="_blank">
                {" "}
                <i className="git fab fa-github"></i>
              </a>
            </p>
          ) : null}
          {props.projects.website !== null ? (
            <p>
              <a href={props.projects.website} target="_blank">
                {" "}
                Link to site
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Project;
