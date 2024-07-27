import img1 from "@Assets/images/about-thumb.webp";
import { AppConst } from "@/Enum/AppConst";
import { memo } from "react";

const aboutFoundersAndCompany = [
  `Founded by alumni of IIT & NIT, ${AppConst.LogoName}. is a leading online platform dedicated to connecting job seekers with employers, facilitating the perfect match between talent and opportunity. Our mission is to simplify and streamline the job search process, empowering individuals to find meaningful employment while enabling organizations to identify top talent efficiently.`,
  `At ${AppConst.LogoName} , we understand that finding the right job can be a transformative experience, shaping not only a person's career but their overall well-being and happiness. Similarly, we recognize that organizations thrive when they have access to exceptional individuals who can contribute to their growth and success. With this understanding, we have created a user-friendly, comprehensive, and intuitive platform that serves as a bridge between job seekers and employers.`,
  `What sets ${AppConst.LogoName}  apart is our commitment to delivering a seamless experience for both job seekers and employers. For job seekers, we provide a vast array of job opportunities across industries and sectors, catering to diverse skill sets and experience levels. Our user-friendly search filters, advanced algorithms, and personalized recommendations help individuals discover relevant positions that align with their qualifications and aspirations. We also offer resources, tips, and guidance to support candidates at every stage of their job search journey, from crafting the perfect resume to acing interviews.`,
  `For employers, ${AppConst.LogoName}  offers a robust platform to attract, assess, and hire top talent efficiently. Our powerful job posting tools and employer branding options enable organizations to showcase their unique employer value proposition and attract a pool of qualified candidates. Through our intelligent candidate matching system, employers can quickly identify individuals who possess the skills and qualifications they seek, saving time and resources in the recruitment process. We also provide employers with analytics and insights to optimize their recruitment strategies and make informed hiring decisions.`,
  `At ${AppConst.LogoName} , we prioritize user satisfaction, and our dedicated team is always ready to assist both job seekers and employers. We believe in building long-term relationships based on trust, transparency, and mutual success. Our commitment to excellence drives us to continuously enhance our platform, adapt to evolving market trends, and leverage the latest technologies to ensure a cutting-edge job search experience.`,
  `Whether you are a job seeker looking for your dream career opportunity or an employer seeking exceptional talent to drive your organization forward, ${AppConst.LogoName}  is your go-to destination. Join us today and let us be your trusted partner in the journey towards professional growth and success.`,
];

function Review() {
  return (
    <section className="inner-review-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div
              style={{ position: "sticky", top: "50px" }}
              className="wd-review-job thumb2 widget-counter stc"
            >
              <div className="thumb d-flex justify-content-center">
                <img src={img1} alt="images" style={{ width: "550px" }} />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 wow fadeInRight">
            <div className="wd-review-job contentbox1 page-text stc">
              <h3 className="text-black">About Us</h3>
              {aboutFoundersAndCompany.map((text) => (
                <p className="mb-4">{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Review);
