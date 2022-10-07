import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BASEURL } from "../../constants/baseurl";
import "./style.css";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await fetch(`${BASEURL}/teams?populate=*&_locale=${lang}`);
      const teamMembersResp = await data.json();
      if (!!teamMembersResp.data) {
        const teamMembers = teamMembersResp.data.map((teamMember) => ({
          ...teamMember.attributes,
          id: teamMember.id,
        }));
        setTeamMembers(teamMembers);
      }
    };
    fetchTestimonials();
  }, [lang]);
  return (
    <section className="team-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="site-heading text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <h3 className="sub-title">{t("aboutPage.teamMember")}</h3>
              <h2 className="section-title">
                {t("aboutPage.ourCreativeMind")}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-center">
              {teamMembers.length > 0 &&
                teamMembers.map((teamMember) => (
                  <div className="col-md-4 col-sm-6" key={teamMember.id}>
                    <div className="single-team-box">
                      <div className="team-image">
                        {teamMember.picture.data && (
                          <img
                            src={teamMember.picture.data.attributes.url}
                            alt={teamMember.name}
                          />
                        )}
                        <div className="team-meta">
                          <h4>{teamMember.name}</h4>
                          <p>{teamMember.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-5">
              {/* <Link to="/team" className="cta-btn btn-fill">
                Explore More
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
