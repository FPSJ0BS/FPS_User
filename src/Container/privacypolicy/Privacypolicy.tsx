import { AppConst } from "@/Enum/AppConst";
import Breadcrumb from "@Components/Breadcrump";
import SEO from "@Components/Seo/Seo";
import { dataPrivacy } from "@Const/fakeData/dataPrivacy";
import { memo } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const Privacypolicy = () => {
  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Privacy Policy"}
        type={"Privacy Policy Page"}
      />
      <Breadcrumb title="Privacy Policy" />
      <section className="term-section">
        <div className="container">
          <Tabs className="row tf-tab">
            <div className="col-lg-4">
              <TabList className="menu-tab tab-term po-sticky">
                {dataPrivacy.map((item, index) => {
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
                {dataPrivacy.map((_dataTerm, index) => {
                  return (
                    <TabPanel
                      key={index}
                      className="term-content animation-tab"
                    >
                      {_dataTerm.children}
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
};

export default memo(Privacypolicy);
