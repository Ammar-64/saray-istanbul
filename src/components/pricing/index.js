import React from "react";
// import { Link } from "react-router-dom";

import residency2 from "../../img/turkish-econ.jpg";

import "./style.css";

const Pricing = () => {
  return (
    <section
      className="pricing-area"
      style={{ backgroundImage: `url(${residency2})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading" data-aos="fade-up">
              <h3 className="sub-title">خدماتنا</h3>
              {/* <h2 className="section-title">SERVICING COST</h2> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-box" data-aos="fade-up">
              <div className="pricing-header">
                <h3>اختيار العقار المناسب</h3>
                {/* <div className="price">
                  $40.00 <span>/ Monthly</span>
                </div> */}
              </div>
              <div className="pricing-content">
                <ul>
                  {/* <li> */}
                  <p>
                    {/* <i className="fa fa-arrow-circle-right" /> */}
                    نقوم بمساعدتكم في اختيار العقار المناسب لمتطلباتكم عبر خبراء
                    عقاريين متخصصين في سوق العقار
                  </p>
                  {/* </li> */}
                  {/* <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Consectetuer adipiscing elit
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Sed diam nonummy
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Nibh euismod tincidunt
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Ut laoreet dolore
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Magna aliquam erat volutpat
                    </p>
                  </li> */}
                </ul>
              </div>
              {/* <div className="pricing-action">
                <Link to="/">Learn More</Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-box" data-aos="fade-up">
              <div className="pricing-header">
                <h3>الإجراءات القانونية</h3>
                {/* <div className="price">
                  $65.85 <span>/ Monthly</span>
                </div> */}
              </div>
              <div className="pricing-content">
                <ul>
                  {/* <li> */}
                  <p>
                    قوم فريقنا القانوني بإجراء استخراج سند تملك العقار وإجراء
                    جميع العمليات القانونية المتعلقة بتملك العقار
                  </p>
                  {/* </li> */}
                  {/* <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Consectetuer adipiscing elit
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Sed diam nonummy
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Nibh euismod tincidunt
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Ut laoreet dolore
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Magna aliquam erat volutpat
                    </p>
                  </li> */}
                </ul>
              </div>
              {/* <div className="pricing-action">
                <Link to="/">Learn More</Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-box " data-aos="fade-up">
              <div className="pricing-header">
                <h3>استلام الإقامة العقارية</h3>
                {/* <div className="price">
                  $140.50 <span>/ Monthly</span>
                </div> */}
              </div>
              <div className="pricing-content">
                <ul>
                  {/* <li> */}
                  <p>
                    {/* <i className="fa fa-arrow-circle-right" /> */}
                    نرافقم عبر إجراءات التقدم حتى استلام الإقامة العقارية خطوة
                    بخطوة
                  </p>
                  {/* </li> */}
                  {/* <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Consectetuer adipiscing elit
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Sed diam nonummy
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Nibh euismod tincidunt
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Ut laoreet dolore
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Magna aliquam erat volutpat
                    </p>
                  </li> */}
                </ul>
              </div>
              {/* <div className="pricing-action">
                <Link to="/">Learn More</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
