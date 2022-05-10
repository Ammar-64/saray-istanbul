import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const ProjectSingleCard = ({ project }) => {
  const baseUrl = "";
  if (!project) {
    return <Loading />;
  }
  return (
    <div className="project-box">
      <Link
        to={`${baseUrl}/project/${project.id}`}
        onClick={window.scrollTo(0, 0)}
      >
        <div className="project-img">
          <img src={`${project.mainImage.data.attributes.url}`} alt="img" />
        </div>
        <h3 className="px-3 text-center">
          {project.name} / {project.location}
          <br /> {project.price}$
        </h3>

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
  );
};
export default ProjectSingleCard;
