import { AppConst } from "@/Enum/AppConst";


const Testimonials = () => {
  return (
    <div className="full-width-container testimonials-widget-container">
      <div className="content">
        <div className="testimonials-widget slick-common-css">
          <div
            className="slick-slider testimonials-slider slick-initialized"
            dir="ltr"
          >
            <div className="slick-list">
              <div
                className="slick-track"
                style={{ width: 6340, left: "-1268px", opacity: 1 }}
              >
                <div
                  data-index={-2}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png 200w,
https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png 306w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png 200w,
https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png 306w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png
                              306w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png
                              306w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Akanksha Gupta</h3>
                          <h4>Software Development Engineer</h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            I recently celebrated a delightful five-year journey
                            at {AppConst.LogoName}, where I joined as a backend engineer and
                            had the opportunity to contribute to a project from
                            its infancy, witnessing its transformation into
                            India's largest merchant network. At {AppConst.LogoName}, we
                            foster a culture that embraces failure as an
                            opportunity for growth, encouraging us to push
                            boundaries and constantly improve. I am challenged
                            with new experiences, igniting my passion to
                            continuously pursue personal and professional
                            growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={-1}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png 200w,
https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png 300w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png 200w,
https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png 300w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png
                              300w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png
                              300w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Atul Kumar</h3>
                          <h4>Senior Product Design Manager, UX Design</h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            In the last 5 years, {AppConst.LogoName} has been both a
                            launchpad as well as an institute for me. This
                            unique combination allows one to take a leap of
                            faith and spread one’s wings, while ensuring that
                            there is always enough support. In the process of
                            stitching experience across Payments, Growth and
                            BFSI verticals, I have had tremendous learning
                            opportunities and was fortunate to compile a diverse
                            set of customer and business understandings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={0}
                  className="slick-slide slick-active slick-current"
                  tabIndex={-1}
                  aria-hidden="false"
                  style={{ outline: "none", width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/69585/person1.png 200w,
https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/630fb/person1.png 300w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/69585/person1.png 200w,
https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/630fb/person1.png 300w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/69585/person1.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/630fb/person1.png
                              300w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/69585/person1.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/630fb/person1.png
                              300w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Kaushal Nahata</h3>
                          <h4>Associate Director, CorpFin</h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            I joined the {AppConst.LogoName} Business Finance team in 2019
                            and have never looked back ever since. The work
                            culture here has presented me with a multitude of
                            opportunities to expand my portfolio, challenge my
                            position and aptitude and has motivated me to
                            deliver my best at all times. I have immense
                            admiration for my leaders and their long term
                            thinking, thoughtful deliberations on what’s right
                            for consumers, adding value in users’ lives and very
                            high standards for corporate governance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={1}
                  className="slick-slide slick-active"
                  tabIndex={-1}
                  aria-hidden="false"
                  style={{ outline: "none", width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/69585/person2.png 200w,
https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/630fb/person2.png 300w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/69585/person2.png 200w,
https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/630fb/person2.png 300w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/69585/person2.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/630fb/person2.png
                              300w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/69585/person2.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/630fb/person2.png
                              300w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Gargi Singh</h3>
                          <h4>
                            Director &amp; Head - Enterprise Business (Offline)
                          </h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            {AppConst.LogoName} has a culture that expects you to grow out
                            of your comfort zone and learn more everyday.
                            Starting from Business Development to Enterprise
                            Team Leadership, on the back of several
                            opportunities coming my way, I have grown within the
                            Offline team across multiple roles and interesting
                            projects. {AppConst.LogoName} gives you a mix of both worlds — a
                            dynamic fast-paced start-up work culture and the
                            benefit of a stable organization with well-defined
                            practices and processes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={2}
                  className="slick-slide"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ outline: "none", width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png 200w,
https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png 306w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png 200w,
https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png 306w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png
                              306w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png
                              306w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Akanksha Gupta</h3>
                          <h4>Software Development Engineer</h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            I recently celebrated a delightful five-year journey
                            at {AppConst.LogoName}, where I joined as a backend engineer and
                            had the opportunity to contribute to a project from
                            its infancy, witnessing its transformation into
                            India's largest merchant network. At {AppConst.LogoName}, we
                            foster a culture that embraces failure as an
                            opportunity for growth, encouraging us to push
                            boundaries and constantly improve. I am challenged
                            with new experiences, igniting my passion to
                            continuously pursue personal and professional
                            growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={3}
                  className="slick-slide"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ outline: "none", width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png 200w,
https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png 300w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png 200w,
https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png 300w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png
                              300w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png
                              300w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Atul Kumar</h3>
                          <h4>Senior Product Design Manager, UX Design</h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            In the last 5 years, {AppConst.LogoName} has been both a
                            launchpad as well as an institute for me. This
                            unique combination allows one to take a leap of
                            faith and spread one’s wings, while ensuring that
                            there is always enough support. In the process of
                            stitching experience across Payments, Growth and
                            BFSI verticals, I have had tremendous learning
                            opportunities and was fortunate to compile a diverse
                            set of customer and business understandings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={4}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/69585/person1.png 200w,
https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/630fb/person1.png 300w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/69585/person1.png 200w,
https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/630fb/person1.png 300w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/69585/person1.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/630fb/person1.png
                              300w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/69585/person1.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/cb8bba4538e55e9189168f39ed240bfc/630fb/person1.png
                              300w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Kaushal Nahata</h3>
                          <h4>Associate Director, CorpFin</h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            I joined the {AppConst.LogoName} Business Finance team in 2019
                            and have never looked back ever since. The work
                            culture here has presented me with a multitude of
                            opportunities to expand my portfolio, challenge my
                            position and aptitude and has motivated me to
                            deliver my best at all times. I have immense
                            admiration for my leaders and their long term
                            thinking, thoughtful deliberations on what’s right
                            for consumers, adding value in users’ lives and very
                            high standards for corporate governance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={5}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/69585/person2.png 200w,
https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/630fb/person2.png 300w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/69585/person2.png 200w,
https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/630fb/person2.png 300w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/69585/person2.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/630fb/person2.png
                              300w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/69585/person2.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/486e4f6d3ba7252d6074610e51e8e5b4/630fb/person2.png
                              300w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Gargi Singh</h3>
                          <h4>
                            Director &amp; Head - Enterprise Business (Offline)
                          </h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            {AppConst.LogoName} has a culture that expects you to grow out
                            of your comfort zone and learn more everyday.
                            Starting from Business Development to Enterprise
                            Team Leadership, on the back of several
                            opportunities coming my way, I have grown within the
                            Offline team across multiple roles and interesting
                            projects. {AppConst.LogoName} gives you a mix of both worlds — a
                            dynamic fast-paced start-up work culture and the
                            benefit of a stable organization with well-defined
                            practices and processes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={6}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png 200w,
https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png 306w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png 200w,
https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png 306w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png
                              306w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/69585/person3.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/f8df217ae5efb7b8804717eece8cfb81/0e59d/person3.png
                              306w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Akanksha Gupta</h3>
                          <h4>Software Development Engineer</h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            I recently celebrated a delightful five-year journey
                            at {AppConst.LogoName}, where I joined as a backend engineer and
                            had the opportunity to contribute to a project from
                            its infancy, witnessing its transformation into
                            India's largest merchant network. At {AppConst.LogoName}, we
                            foster a culture that embraces failure as an
                            opportunity for growth, encouraging us to push
                            boundaries and constantly improve. I am challenged
                            with new experiences, igniting my passion to
                            continuously pursue personal and professional
                            growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={7}
                  tabIndex={-1}
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: 634 }}
                >
                  <div>
                    <div className="card-wrapper">
                      <div className="card-header">
                        <div className="card-image-container">
                          <div
                            className=" gatsby-image-wrapper"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              aria-hidden="true"
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                              }}
                            />
                            <img
                              aria-hidden="true"
                              src="data:image/png;base64,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"
                              alt=""
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                opacity: 0,
                                transitionDelay: "500ms",
                              }}
                            />
                            <picture>
                              <source
                                srcSet="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png 200w,
https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png 300w"
                              />
                              <img
                                srcSet="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png 200w,
https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png 300w"
                                alt="{AppConst.LogoName} Careers Bird!"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center center",
                                  opacity: 1,
                                  transition: "opacity 500ms ease 0s",
                                }}
                              />
                            </picture>
                            <noscript>
                              &lt;picture&gt;&lt;source
                              srcset="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png
                              300w" /&gt;&lt;img loading="lazy"
                              srcset="https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/69585/person4.png
                              200w,
                              https://www.phonepe.com/webstatic/6444/static/31bc7cf46df082c2a11b38f529f5c342/630fb/person4.png
                              300w" src="" alt="{AppConst.LogoName} Careers Bird!"
                              style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                            </noscript>
                          </div>
                        </div>
                        <div className="card-designation-container">
                          <h3>Atul Kumar</h3>
                          <h4>Senior Product Design Manager, UX Design</h4>
                        </div>
                      </div>
                      <div className="card-content-container">
                        <div className="card-content">
                          <p>
                            In the last 5 years, {AppConst.LogoName} has been both a
                            launchpad as well as an institute for me. This
                            unique combination allows one to take a leap of
                            faith and spread one’s wings, while ensuring that
                            there is always enough support. In the process of
                            stitching experience across Payments, Growth and
                            BFSI verticals, I have had tremendous learning
                            opportunities and was fortunate to compile a diverse
                            set of customer and business understandings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="slick-dots" style={{ display: "block" }}>
              <li className="slick-active">
                <button>1</button>
              </li>
              <li className="">
                <button>2</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials