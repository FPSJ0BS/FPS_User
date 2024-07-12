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
        title={`Privacy Policy | ${AppConst.LogoName} `}
        description={`If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your information, please contact us at HRsupport@fpsjob.com.`}
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
