import { AppConst } from "@/Enum/AppConst";
import Breadcrumb from "@Components/Breadcrump";
import SEO from "@Components/Seo/Seo";
import { dataTerm } from "@Const/fakeData/dataTerm";
import { memo } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const Termsofuse = () => {
  return (
    <>
      <SEO
        title={`Terms of Use - ${AppConst.LogoName}`}
        description={`
        Review the terms of use for accessing and using ${AppConst.LogoName} ' platform. 
        Understand the guidelines, responsibilities, and limitations 
        that govern your use of our services. 
        By accessing ${AppConst.LogoName} , you agree to abide by these terms and conditions.
        `}
        name={"Terms of Use"}
        type={"Terms of Use Page"}
      />
      <Breadcrumb title={"Terms & Conditions"} />
      <section className="term-section">
        <div className="container">
          <Tabs className="row tf-tab">
            <div className="col-lg-4">
              <TabList className="menu-tab tab-term po-sticky">
                {dataTerm.map((item, index) => {
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
                {dataTerm.map((_dataTerm, index) => {
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

export default memo(Termsofuse);
