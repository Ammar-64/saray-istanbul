import React from "react";
// import ServiceBg from "../../img/service-bg-1.png";
import Pricing from "../../components/pricing";
import ContactModal from "../ContactModal";
import residency1 from "../../img/residency1.jpg";

import "./style.css";

const ServiceSingle = () => {
  return (
    <div>
      <section className="service-video-box-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="site-heading">
                {/* <h3 className="sub-title">SERVICE</h3> */}
                <h2 className="section-title">
                  الإقامة
                  <br /> العقارية
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-video-box-text">
                <p>
                  هي وثيقة صادرة عن دائرة الهجرة التركية، تمنحها السلطات للأشخاص
                  الأجانب الذين اشتروَا عقاراً سكنيّاً، وهي إقامة مؤقّتة قابلة
                  للتجديد سنويّاً، ويحقّ للزوجة، والأولاد الذين هم دون 18 عاماً
                  الحصول عليها وتسمح الإقامة لصاحبها بالتمتّع بحقوق التعليم،
                  والطبابة، والمعيشة في تركيا بشكل قانوني. ويحقّ لحامل الإقامة
                  العقارية التقدّم بالطلب للحصول على إقامة دائمة في تركيا إذا
                  أتمّ 8 سنوات بشكل قانونيّ دون انقطاع.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="service-video-box">
                <img src={residency1} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="blog-left">
        <div className="blog-left-content">
          <div className="blog-info "></div>
          <h2 className="text-center" style={{ color: "#222777" }}>
            شروط الحصول الإقامة العقارية في تركيا
          </h2>
          <ol className="text-center h4 m-5">
            <li className="my-2">
              <i
                className="fa fa-arrow-circle-left mx-2"
                style={{ color: "#222777" }}
              />
              1- أن لا تقل قيمة العقار المملوك عن 75 ألف دولار أمريكي في
              الولايات الكبيرة كاسطنبول، انقرة، أنطاليا.
            </li>
            <li className="my-2">
              <i
                className="fa fa-arrow-circle-left mx-2"
                style={{ color: "#222777" }}
              />
              2- ان يكون سند الملكية باسم المتقدم للحصول على الطلب
            </li>
            <li className="my-2">
              <i
                className="fa fa-arrow-circle-left mx-2"
                style={{ color: "#222777" }}
              />
              3- الجنسيات الخمسة الممنوعة من التملك في تركيا
            </li>
          </ol>
        </div>
      </div>
      {/* <p>{t("citizenShip.firstParagraph")}</p> */}
      <Pricing />

      <div className="blog-left">
        <div className="blog-left-content m-5">
          <div>
            <h3 style={{ color: "#222777" }}>
              لن تحصل فقط على الإقامة العقارية{" "}
            </h3>
            <p className="h4 my-2">
              استطعنا ضمان عائد استثماري لعملائنا يتراوح بين 6-10% بشكل متوسط
            </p>
          </div>
          <hr style={{ color: "#222777" }} />
          <div>
            <h3 style={{ color: "#222777" }}>
              خياراتنا السكنية لا تقل أهمية عن الخيارات التجارية
            </h3>
            <p className="h4 my-2">
              نوفر لكم خيارات عقارية سكنية مميزة وفي وسط المدينة مع ضمان الحصول
              على الإقامة العقارية وضمان معدل زيادة مرتفع على سعر العقار
            </p>
          </div>
          <hr style={{ color: "#222777" }} />
          <div>
            <h3 style={{ color: "#222777" }}>فريقنا القانوني المتخصص </h3>
            <p className="h4 my-2">
              لن تحتاج لإي خدمة خارجية ففريقنا القانوني المتخصص سيقوم بتسيير
              جميع معاملاتكم القانونية بشكل كامل منذ شراء العقار وحتى استلام
              المفتاح
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-50 d-flex justify-center"> */}
      <ContactModal />
      {/* </div> */}
      {/* <section className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading text-center" data-aos="fade-up">
                <h3 className="sub-title">CORPORATION</h3>
                <h2 className="section-title">OUR CLIENTS & PARTNERS</h2>
              </div>
            </div>
          </div>
        </div>
        <Partners /> 
      </section> */}
    </div>
  );
};
export default ServiceSingle;
