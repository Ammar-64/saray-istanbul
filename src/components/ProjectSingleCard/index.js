import React from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../constants/baseurl";

const ProjectSingleCard = ({ project }) => {
  console.log(project.projectMainImage);
  return (
    <div className="col-md-5  col-sm-6">
      <div className="project-box">
        <Link to={`/projects-single/${project.id}`}>
          <img src={`${BASEURL}${project.projectMainImage[0].url}`} alt="img" />
          <h3>
            {project.projectName}
            {/* <br /> IN NEW WORK */}
          </h3>
          <p>{project.projectLocation}</p>
          <div className="project-zoom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-eye"
            >
              <path
                stroke="#ffffff"
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
              />
              <circle stroke="#ffffff" cx={12} cy={12} r={3} />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ProjectSingleCard;
