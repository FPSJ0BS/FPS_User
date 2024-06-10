import { AppConst } from "@/Enum/AppConst";
import Breadcrumb from "@Components/Breadcrump";
import SEO from "@Components/Seo/Seo";
import dataFaq from "@Const/fakeData/dataFaq";
import { memo } from "react";
import { Accordion } from "react-bootstrap-accordion";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

function Faq() {
  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={`${AppConst.LogoName} FAQ`}
        type={"Frequently Asked Questions (FAQ) Page"}
      />
      <Breadcrumb title="FAQS" />
      <section className="term-section">
        <div className="container">
          <Tabs className="row tf-tab">
            <div className="col-lg-4 ">
              <TabList className="menu-tab tab-term po-sticky">
                {dataFaq.map((item, index) => {
                  return (
                    <Tab className="ct-tab" key={index}>
                      {`${item.id}. ${item.heading}`}
                    </Tab>
                  );
                })}
              </TabList>
            </div>
            <div className="col-lg-8">
              <div className="content-tab">
                {dataFaq.map((_dataFaq, index) => {
                  return (
                    <TabPanel
                      key={index}
                      className="term-content animation-tab"
                    >
                      <div className="accordion-page">
                        <h1 className="h4 mb-5">Frequently Asked Questions</h1>
                      </div>
                      <h6 className="mb-5 h6">{_dataFaq.heading}</h6>
                      <div className="flat-accordion">
                        {_dataFaq.children.map((item, index) => (
                          <Accordion key={index} title={item.title}>
                            <div className="toggle-content">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: item.content,
                                }}
                                style={{ whiteSpace: "pre-line" }}
                              ></p>
                            </div>
                          </Accordion>
                        ))}
                      </div>
                    </TabPanel>
                  );
                })}
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default memo(Faq);
