// src/Resume.js
import React from "react";
import "./resumeOne.scss"

const ResumeOneTemplate = React.forwardRef(() => (
  <div id="container-pdf"  className="resume-one  p-[50px]">
 
    {/* <div id="resume-header" className=""></div> */}
    <div className=" top-section">
      <div className="left-section">
        <img alt="image" />
      </div>

      <div className="right-section">
        <h2>John Doe</h2>

        <p className="side-heading">Frontend Developer</p>
        <p className="side-para">
          Dedicated and efficient software engineer with 5+ years of experience
          in application development, software design, and system integration.
          Proficient in multiple programming languages, frameworks. Adept at
          working collaboratively within team environments to deliver
          high-quality software solutions. Passionate about learning new
          technologies and enhancing coding skills.
        </p>
      </div>
    </div>

    <div className=" bottom-section ">
      <div className=" bottom-left-section ">
        <p className="side-para">(555) 123-4567</p>

        <p className="side-para">john.deo@example.com</p>

        <div className="experience">
          <p className="side-heading">Experiences:</p>
          <div className="section-all">
            <div className="section-all-left">
              <p className="side-para">2017 - 2019</p>
            </div>
            <div className="section-all-right">
              <p className="side-para">Software Engineer</p>
              <p className="section-para">Software Engineer</p>
              <p className="section-para">
                • Developed and maintained scalable web applications using Java
                and Spring Boot. • Led a team of 5 developers in creating a new
                microservices architecture, improving system performance by 30%.
                • Integrated third-party APIs to enhance application
                functionality. • Conducted code reviews and provided mentorship
                to junior developers. • Utilized Docker and Jenkins for
                continuous integration and deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="projects ">
          <p className="side-heading">Projects:</p>
          <div className="section-all">
            <div className="section-all-left">
              <p className="side-para">2017 - 2019</p>
            </div>
            <div className="section-all-right">
              <p className="side-para">Personal Portfolio Website</p>
              <p className="section-para">
                • Developed and maintained scalable web applications using Java
                and Spring Boot. • Led a team of 5 developers in creating a new
                microservices architecture, improving system performance by 30%.
                • Integrated third-party APIs to enhance application
                functionality. • Conducted code reviews and provided mentorship
                to junior developers. • Utilized Docker and Jenkins for
                continuous integration and deployment.
              </p>
            </div>
          </div>

          <div className="section-all">
            <div className="section-all-left">
              <p className="side-para">2017 - 2019</p>
            </div>
            <div className="section-all-right">
              <p className="side-para">Personal Portfolio Website</p>
              <p className="section-para">
                • Developed and maintained scalable web applications using Java
                and Spring Boot. • Led a team of 5 developers in creating a new
                microservices architecture, improving system performance by 30%.
                • Integrated third-party APIs to enhance application
                functionality. • Conducted code reviews and provided mentorship
                to junior developers. • Utilized Docker and Jenkins for
                continuous integration and deployment.
              </p>
            </div>
          </div>

          <div className="section-all">
            <div className="section-all-left">
              <p className="side-para">2017 - 2019</p>
            </div>
            <div className="section-all-right">
              <p className="side-para">Personal Portfolio Website</p>
              <p className="section-para">
                • Developed and maintained scalable web applications using Java
                and Spring Boot. • Led a team of 5 developers in creating a new
                microservices architecture, improving system performance by 30%.
                • Integrated third-party APIs to enhance application
                functionality. • Conducted code reviews and provided mentorship
                to junior developers. • Utilized Docker and Jenkins for
                continuous integration and deployment.
              </p>
            </div>
          </div>


          <div className="section-all">
            <div className="section-all-left">
              <p className="side-para">2017 - 2019</p>
            </div>
            <div className="section-all-right">
              <p className="side-para">Personal Portfolio Website</p>
              <p className="section-para">
                • Developed and maintained scalable web applications using Java
                and Spring Boot. • Led a team of 5 developers in creating a new
                microservices architecture, improving system performance by 30%.
                • Integrated third-party APIs to enhance application
                functionality. • Conducted code reviews and provided mentorship
                to junior developers. • Utilized Docker and Jenkins for
                continuous integration and deployment.
              </p>
            </div>
          </div>

          <div className="section-all">
            <div className="section-all-left">
              <p className="side-para">2017 - 2019</p>
            </div>
            <div className="section-all-right">
              <p className="side-para">Personal Portfolio Website</p>
              <p className="section-para">
                • Developed and maintained scalable web applications using Java
                and Spring Boot. • Led a team of 5 developers in creating a new
                microservices architecture, improving system performance by 30%.
                • Integrated third-party APIs to enhance application
                functionality. • Conducted code reviews and provided mentorship
                to junior developers. • Utilized Docker and Jenkins for
                continuous integration and deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <p className="side-heading">Skills:</p>
          <div className="section-all">
            <img alt="" />
          </div>
        </div>
      </div>

      <div className=" bottom-right-section ">
        <div className="experiences">
          <p className="side-heading">Experiences:</p>
          <div className="section-all">
            <div className="section-all-left">
              <p className="side-para">Software Engineer</p>
              <p className="side-para degree">Software Engineer</p>
            </div>
            <div className="section-all-right">
              <p className="side-para year">2017 - 2019</p>
            </div>
          </div>

          <div className="section-all">
            <div className="section-all-left">
              <p className="side-para">Software Engineer</p>
              <p className="side-para degree">Software Engineer</p>
            </div>
            <div className="section-all-right">
              <p className="side-para year">2017 - 2019</p>
            </div>
          </div>
        </div>

        <div className="certificates">
          <p className="side-heading">Experiences:</p>

          <ol>
            <li>Software Engineer</li>
            <li>Software Engineer</li>
          </ol>
        </div>

        <div className="certificates">
          <p className="side-heading">Languages:</p>

          <ol>
            <li>Software Engineer</li>
            <li>Software Engineer</li>
          </ol>
        </div>

        
      </div>
    </div>
    {/* <div id="" className="resume-footer">wef</div> */}

  </div>
));

export default ResumeOneTemplate;
